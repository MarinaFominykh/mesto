import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';
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

const userRes = api.getProfile();
const cardsRes = api.getInitialCards();
const promisesArr = [userRes, cardsRes];

Promise.all(promisesArr)
    .then(([userData, cardData]) => {
        userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
        userId = userData._id
        cardData.forEach(data => {
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
    .catch(console.log)


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
const popupWithImageFill = new PopupWithImage(imageFormPopupSelector);
popupWithImageFill.setEventListeners();

const popupWithEditForm = new PopupWithForm({
        submitForm: (data) => {
            const { name, job } = data;
            console.log(data)
            api.editProfile(name, job)
                .then(res => {
                    userInfo.setUserInfo(name, job, res.avatar);
                    popupWithEditForm.close();
                })
                .catch(console.log)
                .finally(() => { popupWithEditForm.submitButtonText('Сохранить') })
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
                popupWithCardForm.close()
            })
            .finally(() => { popupWithCardForm.submitButtonText('Создать') })
            .catch(console.log)

    }
}, addCardFormPopupSelector)

popupWithCardForm.setEventListeners();

const popupWithConfirmationForm = new PopupWithConfirm({
    submitForm: () => {

    }
}, confirmationFormPopupSelector);

popupWithConfirmationForm.setEventListeners();

const popupWithUpdateAvatarForm = new PopupWithForm({
    submitForm: (data) => {
        api.updateAvatar(data.link)
            .then(res => {
                console.log(res.about)
                userInfo.setUserInfo(res.name, res.about, res.avatar);
                popupWithUpdateAvatarForm.close();
            })
            .catch(console.log)
            .finally(() => {
                popupWithUpdateAvatarForm.submitButtonText('Сохранить')
            })
    }
}, updateAvatarFormSelector);

popupWithUpdateAvatarForm.setEventListeners();

//Функции

//Функция, подставляющая значения профиля в поля формы при открытии
function handleOpenProfileForm() {
    const { userName, userJob } = userInfo.getUserInfo()
    inputName.value = userName;
    inputJob.value = userJob;
    popupWithEditForm.open();

};

//Функция для дизейбла кнопки
function handleOpenAddCardForm() {
    popupWithCardForm.open();
    addCardFormValidator.toggleSubmitButton();
};

function handleOpenUpdateAvatarForm() {
    popupWithUpdateAvatarForm.open();
    updateAvatarFormValidator.toggleSubmitButton();
};

//Создать и вернуть карточку
function getCard(data) {
    const card = new Card(data,
        cardTemplateSelector,
        () => { popupWithImageFill.open(data.name, data.link) },
        (id) => {
            popupWithConfirmationForm.open();
            popupWithConfirmationForm.changeSubmitHandler(() => {
                api.deleteCard(id)
                    .then(res => {
                        card.deleteCard();
                        popupWithConfirmationForm.close();
                    })
                    .catch(console.log)
                    .finally(() => { popupWithConfirmationForm.submitButtonText('Да') })
            });
        },
        (id) => {
            if (card.isLiked()) {
                api.deleteLike(id)
                    .then(res => {
                        res.likes
                        card.setLikes(res.likes)
                    })
                    .catch(console.log)
            } else {
                api.addLike(id)
                    .then(res => {
                        res.likes
                        card.setLikes(res.likes)
                    })
                    .catch(console.log)
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
    handleOpenUpdateAvatarForm()
});