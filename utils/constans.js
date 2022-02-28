const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_activ-image');
const popups = document.querySelectorAll('.popup')

const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const editForm = editPopup.querySelector('.popup__container');
const addCardForm = addCardPopup.querySelector('.popup__container');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');


const list = document.querySelector('.places__cards');
const cardTemplateSelector = '.card-template';

const imageActive = imagePopup.querySelector('.popup__image-activ');
const imageText = imagePopup.querySelector('.popup__image-text');

const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__error_active',
    errorSelector: '.popup__error',
    inactiveButtonClass: 'popup__save_disabled'
};

export {
    editPopup,
    addCardPopup,
    imagePopup,
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
    imageActive,
    imageText,
    popups
}