import { FormValidator } from '../components/formValidator.js';
import { initialCards } from '../scripts/cards.js';
import { Card } from '../components/card.js';
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
    inputTitle,
    inputLink,
    profileName,
    profileJob,
    list,
    cardTemplateSelector,
    config,
    cardListSection,
    addCardFormPopupSelector,
    editFormPopupSelector,
    imageFormPopupSelector
} from '../utils/constans.js'
import { Section } from '../components/Section.js'



//Создание экземпляров классов и вызов методов
const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const cardElement = getCard(data);
        cardList.addItem(cardElement);
    },
}, cardListSection);

cardList.renderItems();


const editFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addCardForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();


const PopupWithImageFill = new PopupWithImage(imageFormPopupSelector);
PopupWithImageFill.setEventListeners();


const userInfo = new UserInfo({ nameSelector: '.profile__title', jobSelector: '.profile__subtitle' });
const popupWithEditForm = new PopupWithForm({
        submitForm: (data) => {
            userInfo.setUserInfo(data);
            popupWithEditForm.close();
        }
    },
    editFormPopupSelector
);
popupWithEditForm.setEventListeners();


const popupWithCardForm = new PopupWithForm({
    submitForm: () => {
        createCard({
            name: inputTitle.value,
            link: inputLink.value,
        })
        popupWithCardForm.close()
    }
}, addCardFormPopupSelector)

popupWithCardForm.setEventListeners();


//Функции

//Функция, подставляющая значения профиля в поля формы при открытии
function handleOpenProfileForm() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    editFormValidator.toggleSubmitButton();
    popupWithEditForm.open();

};

//Функция для дизейбла кнопки
function handleOpenAddCardForm() {
    popupWithCardForm.open();
    addCardFormValidator.toggleSubmitButton();
};

//Создать и вернуть карточку
function getCard(data) {
    const card = new Card(data, cardTemplateSelector, handleCardClick);
    return card.getCard();
}

//Добавить карточку на страницу
function createCard(data) {
    const cardElement = getCard(data);
    list.prepend(cardElement);
};

//Функция открытия попапа с картинкой
function handleCardClick(name, link) { PopupWithImageFill.open(name, link) }


//Слушатели
editProfileButton.addEventListener('click', () => {
    handleOpenProfileForm();
    editFormValidator.resetValidation();

});

addCardButton.addEventListener('click', () => {
    handleOpenAddCardForm();
    addCardFormValidator.resetValidation();
});