import { formValidator } from './formValidator.js';
import { initialCards } from './cards.js';
import { Card } from './card.js'

const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
export const imagePopup = document.querySelector('.popup_type_activ-image');

const editProfileButton = document.querySelector('.profile__edit-button');
const closeEditPopupButton = editPopup.querySelector('.popup__close');
const addCardButton = document.querySelector('.profile__add-button');
const closeAddCardPopupButton = addCardPopup.querySelector('.popup__close');
const closeImagePopupButton = imagePopup.querySelector('.popup__close');

//Формы
const editForm = editPopup.querySelector('.popup__container');
const addCardForm = addCardPopup.querySelector('.popup__container');


//Инпуты:
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');


const list = document.querySelector('.places__cards');
const cardTemplateSelector = '.card-template';

const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__error_active',
    errorSelector: '.popup__error',
    inactiveButtonClass: 'popup__save_disabled'
}

const editFormValidator = new formValidator(config, editForm);
const addCardFormValidator = new formValidator(config, addCardForm);

editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

//Функция открытия модального окна
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
};

//Функция закрытия модального окна
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
};

//Закрытие модального окна нажатием на клавишу esc
function handleEscClose(event) {
    if (event.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
};

//Функция, подставляющая значения профиля в поля формы при открытии
function handleOpenProfileForm() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    editFormValidator.toggleSubmitButton();
    openPopup(editPopup);
};

//Функция для дизейбла кнопки
function handleOpenAddCardForm() {
    openPopup(addCardPopup)
    addCardFormValidator.toggleSubmitButton();
};

//Функция, подставляющая значение из формы в поля профиля
function formEditPopapSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(editPopup);
};

editProfileButton.addEventListener('click', handleOpenProfileForm);
addCardButton.addEventListener('click', handleOpenAddCardForm);
closeEditPopupButton.addEventListener('click', () => closePopup(editPopup));
closeAddCardPopupButton.addEventListener('click', () => closePopup(addCardPopup));
closeImagePopupButton.addEventListener('click', () => closePopup(imagePopup));
editForm.addEventListener('submit', formEditPopapSubmitHandler);

addCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createCard({
        name: inputTitle.value,
        link: inputLink.value,
    })
    closePopup(addCardPopup);
    addCardForm.reset();
});


function createCard(data) {
    const card = new Card(data, cardTemplateSelector);
    const cardElement = card.getCard();
    list.prepend(cardElement);
};

initialCards.forEach((data) => {
    createCard(data)
});

//Закрытие модального окна кликом по оверлею
function closePopupOnOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.currentTarget)
    }
};

editPopup.addEventListener('click', closePopupOnOverlayClick);
addCardPopup.addEventListener('click', closePopupOnOverlayClick);
imagePopup.addEventListener('click', closePopupOnOverlayClick);