import { FormValidator } from './FormValidator.js';
import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
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
    popups,
    cardListSection,
    addCardFormPopupSelector,
    editFormPopupSelector,
    imageFormPopupSelector
} from '../utils/constans.js'
import { Section } from './Section.js'


const editFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addCardForm);

editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

//Функция открытия модального окна
// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', handleEscClose);
// };

//Функция закрытия модального окна
// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', handleEscClose);
// };

//Закрытие модального окна нажатием на клавишу esc
// function handleEscClose(event) {
//     if (event.key === 'Escape') {
//         closePopup(document.querySelector('.popup_opened'));
//     }
// };

// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             // closePopup(popup)
//             editFormPopupToggle.close()


//         }
//         if (evt.target.classList.contains('popup__close')) {
//             // closePopup(popup)
//             editFormPopupToggle.close()

//         }
//     })
// })

//Функция, подставляющая значения профиля в поля формы при открытии
function handleOpenProfileForm() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    editFormValidator.toggleSubmitButton();
    // openPopup(editPopup);
    editFormPopupToggle.open();

};


//Функция для дизейбла кнопки
function handleOpenAddCardForm() {
    // openPopup(addCardPopup)
    addCardPopupToggle.open();
    addCardFormValidator.toggleSubmitButton();
};

//Функция, подставляющая значение из формы в поля профиля
function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    // closePopup(editPopup);
    editFormPopupToggle.close()


};

editProfileButton.addEventListener('click', () => {
    handleOpenProfileForm();
    editFormValidator.resetValidation();

});

addCardButton.addEventListener('click', () => {
    handleOpenAddCardForm();
    addCardFormValidator.resetValidation();
});

// editForm.addEventListener('submit', handleEditFormSubmit);

// addCardForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     createCard({
//             name: inputTitle.value,
//             link: inputLink.value,
//         })
//         // closePopup(addCardPopup);
//     addCardPopupToggle.close()
//     addCardForm.reset();
// });


function getCard(data) {
    const card = new Card(data, cardTemplateSelector, handleCardClick);
    return card.getCard();
}

function createCard(data) {
    const cardElement = getCard(data);
    list.prepend(cardElement);
};

// initialCards.forEach((data) => {
//     createCard(data)
// });

// initialCards.forEach((data) => {
//     const cardElement = getCard(data);
//     list.prepend(cardElement);
// });


function handleCardClick(name, link) {
    // openPopup(imagePopup)
    // imagePopupToggle.open()
    PopupWithImageFill.open(name, link)
        // imageActive.src = link
        // imageText.textContent = name
        // imageActive.alt = name
}

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const cardElement = getCard(data);
        cardList.addItem(cardElement);
    },
}, cardListSection);

cardList.renderItems();

const addCardPopupToggle = new Popup(addCardFormPopupSelector);
const editFormPopupToggle = new Popup(editFormPopupSelector);
export const imagePopupToggle = new Popup(imageFormPopupSelector);

// addCardPopupToggle.setEventListeners();
// editFormPopupToggle.setEventListeners();
imagePopupToggle.setEventListeners();

class PopupWithForm extends Popup {
    constructor({ submitForm }, popupSelector) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__container');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));

    }
    _getInputValues(){
        
        this._formValues = {};

        
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        return this._formValues;
    }
    setEventListeners() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitForm(this._getInputValues());
        });
        super.setEventListeners();
    }
    close () {
        super.close();
        this._form.reset();
    }

}

class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userJob = document.querySelector(jobSelector);
    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.userName = this._userName.textContent;
        this._userInfo.userJob = this._userJob.textContent;
        return this._userInfo;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.job;
    }
  
}
const userInfo = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__subtitle'});
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

const PopupWithImageFill = new PopupWithImage(imageFormPopupSelector)


