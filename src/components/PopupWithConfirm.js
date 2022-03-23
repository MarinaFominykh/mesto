import { Popup } from './Popup.js';
export class PopupWithConfirm extends Popup {
    constructor({ submitForm }, popupSelector) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__container');
        // this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitButton = this._form.querySelector('.popup__save');

    }

    changeSubmitHandler(newSubmitHandler) {
        this._submitForm = newSubmitHandler
    }


    setEventListeners() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitButton.textContent = 'Сохранение...'
            this._submitForm();
        });
        super.setEventListeners();
    }

    submitButtonText(text) {
        this._submitButton.textContent = text;

    }
}