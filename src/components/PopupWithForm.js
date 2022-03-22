import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor({ submitForm }, popupSelector) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__container');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitButton = this._form.querySelector('.popup__save');

    }
    _getInputValues() {

        this._formValues = {};


        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    changeSubmitHandler(newSubmitHandler) {
        this._submitForm = newSubmitHandler
    }
    setEventListeners() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitButton.textContent = 'Сохранение...'
            this._submitForm(this._getInputValues());
        });
        super.setEventListeners();
    }
    close() {
        super.close();
        this._form.reset();
    }

    open(text) {
        this._submitButton.textContent = text;
        super.open();
        
    }

}