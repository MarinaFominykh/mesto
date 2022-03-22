import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import {
    editProfileButton,
    addCardButton,
    editForm,
    addCardForm,
    inputName,
    inputJob,
    cardTemplateSelector,
    config,
    cardListSection,
    addCardFormPopupSelector,
    editFormPopupSelector,
    imageFormPopupSelector,
    confirmationFormPopupSelector,
    updateAvatarForm,
    updateAvatarFormSelector,
    updateAvatarButton
} from '../utils/constans.js';
import { Section } from '../components/Section.js';
import './index.css';
import { api } from '../components/Api.js';

let userId

api.getProfile()
    .then(res => {
        console.log(res)
        userInfo.setUserInfo(res.name, res.about, res.avatar)
        userId = res._id
    });

api.getInitialCards()
    .then(cardata => {
        cardata.forEach(data => {
            const cardElement = getCard({
                name: data.name,
                link: data.link,
                likes: data.likes,
                id: data._id,
                userId: userId,
                ownerId: data.owner._id

            });
            cardList.addItem(cardElement)

        });
    })


//Создание экземпляров классов и вызов методов

const cardList = new Section({
    items: [],
    renderer: (data) => {
        const cardElement = getCard(data);
        cardList.addItem(cardElement);
    },
}, cardListSection);

cardList.renderItems();

const editFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addCardForm);
const updateAvatarFormValidator = new FormValidator(config, updateAvatarForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
updateAvatarFormValidator.enableValidation();

const userInfo = new UserInfo({ nameSelector: '.profile__title', jobSelector: '.profile__subtitle', avatarSelector: '.profile__avatar' });
const PopupWithImageFill = new PopupWithImage(imageFormPopupSelector);
PopupWithImageFill.setEventListeners();

const popupWithEditForm = new PopupWithForm({
        submitForm: (data) => {
            const { name, job, avatar } = data;
            api.editProfile(name, job, avatar)
                .then(res => {
                    console.log(res)
                    userInfo.setUserInfo(name, job, avatar);
                })
            popupWithEditForm.close();
        }
    },
    editFormPopupSelector
);

popupWithEditForm.setEventListeners();

const popupWithCardForm = new PopupWithForm({
    submitForm: (data) => {
        api.addCard(data.name, data.link)
            .then(res => {

                createCard({
                    name: res.name,
                    link: res.link,
                    likes: res.likes,
                    id: res._id,
                    userId: userId,
                    ownerId: res.owner._id
                })
            })
        popupWithCardForm.close()
    }
}, addCardFormPopupSelector)

popupWithCardForm.setEventListeners();

const popupWithConfirmationForm = new PopupWithForm({
    submitForm: () => {
        popupWithConfirmationForm.close();
    }
}, confirmationFormPopupSelector);

popupWithConfirmationForm.setEventListeners();

const popupWithUpdateAvatarForm = new PopupWithForm({
    submitForm: (data) => {

        console.log('удалить');
        api.updateAvatar(data.link)
            .then(res => {
                console.log(res.avatar)
                userInfo.setUserInfo(res.name, res.job, res.avatar);

            })
        popupWithUpdateAvatarForm.close();
    }
}, updateAvatarFormSelector);

popupWithUpdateAvatarForm.setEventListeners();

//Функции

//Функция, подставляющая значения профиля в поля формы при открытии
function handleOpenProfileForm() {
    const { userName, userJob } = userInfo.getUserInfo()
    inputName.value = userName;
    inputJob.value = userJob;
    popupWithEditForm.open('Сохранить');

};

//Функция для дизейбла кнопки
function handleOpenAddCardForm() {
    popupWithCardForm.open('Создать');
    addCardFormValidator.toggleSubmitButton();
};

//Создать и вернуть карточку
function getCard(data) {
    // const card = new Card(data, cardTemplateSelector, handleCardClick);
    const card = new Card(data,
        cardTemplateSelector,
        () => { PopupWithImageFill.open(data.name, data.link) },
        (id) => {
            popupWithConfirmationForm.open('Вы уверены?');
            popupWithConfirmationForm.changeSubmitHandler(() => {
                api.deleteCard(id)
                    .then(res => {
                        card.deleteCard();
                        popupWithConfirmationForm.close();
                    })
            });
        },
        (id) => {
            if (card.isLiked()) {
                api.deleteLike(id)
                    .then(res => {
                        res.likes
                        card.setLikes(res.likes)
                    })
            } else {
                api.addLike(id)
                    .then(res => {
                        res.likes
                        card.setLikes(res.likes)
                    })
            }
        },
    );
    return card.getCard();
}

//Добавить карточку на страницу
function createCard(data) {
    const cardElement = getCard(data);
    cardList.addItem(cardElement);
};

//Слушатели
editProfileButton.addEventListener('click', () => {
    handleOpenProfileForm();
    editFormValidator.resetValidation();

});

addCardButton.addEventListener('click', () => {
    handleOpenAddCardForm();
    addCardFormValidator.resetValidation();
});

updateAvatarButton.addEventListener('click', () => {
    popupWithUpdateAvatarForm.open('Сохранить');
});