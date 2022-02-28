import { FormValidator } from './FormValidator.js';
import { initialCards } from './cards.js';
import { Card } from './Card.js'
import {
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
} from '../utils/constans.js'


const editFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addCardForm);

editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

//Функция открытия модального окна
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
};

//Функция закрытия модального окна
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
};

//Закрытие модального окна нажатием на клавишу esc
function handleEscClose(event) {
    if (event.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
};

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})

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
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(editPopup);
};

editProfileButton.addEventListener('click', () => {
    handleOpenProfileForm();
    editFormValidator.resetValidation();

});

addCardButton.addEventListener('click', () => {
    handleOpenAddCardForm();
    addCardFormValidator.resetValidation();
});

editForm.addEventListener('submit', handleEditFormSubmit);

addCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createCard({
        name: inputTitle.value,
        link: inputLink.value,
    })
    closePopup(addCardPopup);
    addCardForm.reset();
});


function getCard(data) {
    const card = new Card(data, cardTemplateSelector, handleCardClick);
    return card.getCard();
}

function createCard(data) {
    const cardElement = getCard(data);
    list.prepend(cardElement);
};

initialCards.forEach((data) => {
    createCard(data)
});

function handleCardClick(name, link) {
    openPopup(imagePopup)
    imageActive.src = link
    imageText.textContent = name
    imageActive.alt = name
}