export class formValidator {
    constructor(setting, form) {
        this._form = form;
        this._setting = setting;
        this._inputList = Array.from(this._form.querySelectorAll(this._setting.inputSelector));
        this._button = this._form.querySelector(this._setting.buttonSelector);

    }

        _showInputError(input, errorContainer) {
        input.classList.add(this._setting.inputErrorClass);
        errorContainer.classList.add(this._setting.errorActiveClass);
        errorContainer.textContent = input.validationMessage;
    };


    _hideInputError(input, errorContainer) {
        input.classList.remove(this._setting.inputErrorClass);
        errorContainer.classList.remove(this._setting.errorActiveClass);
        errorContainer.textContent = '';
    };


    _validateInput = (input) => {
        const errorContainer = this._form.querySelector(`#error-${input.id}`);
        if (input.validity.valid) {
            this._hideInputError(input, errorContainer);
        } else {
            this._showInputError(input, errorContainer);
        }
    };

    _setEventListener = () => {

        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._validateInput(input);
                this.toggleSubmitButton();
            });
        });

    };

    toggleSubmitButton() {

        const isFormValid = this._form.checkValidity();
        if (isFormValid) {
            this._button.classList.remove(this._setting.inactiveButtonClass);
            this._button.removeAttribute('disabled');


        } else {
            this._button.classList.add(this._setting.inactiveButtonClass);
            this._button.setAttribute('disabled', 'true');

        }
    };

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener()
    }
}