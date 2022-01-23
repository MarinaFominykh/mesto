//Код валидации

function submitForm(event) {
    event.preventDefault();

};

// Функция, которая показывает сообщения об ошибке
function showInputError(input, errorContainer, { inputErrorClass, errorActiveClass }) {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorActiveClass);
    errorContainer.textContent = input.validationMessage;
};

//Функция, которая скрывает сообщение об ошибке
function hideInputError(input, errorContainer, { inputErrorClass, errorActiveClass }) {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorActiveClass);
    errorContainer.textContent = '';
};

//Функция, меняющая стиль кнопки "Отправить"
function toggleSubmitButton(form, { buttonSelector, inactiveButtonClass }) {
    const button = form.querySelector(buttonSelector);
    const isFormValid = form.checkValidity();
    if (isFormValid) {
        button.classList.remove(inactiveButtonClass);
        button.removeAttribute('disabled');

    } else {
        button.classList.add(inactiveButtonClass)
        button.setAttribute('disabled', 'true');

    }
};

function validateInput(form, input, classes) {
    const errorContainer = form.querySelector(`#error-${input.id}`);
    if (input.validity.valid) {
        hideInputError(input, errorContainer, classes);

    } else {
        showInputError(input, errorContainer, classes);
    }
    toggleSubmitButton(form, classes);
}



function enableValidation({ formSelector, inputSelector, ...rest }) {
    const forms = document.querySelectorAll(formSelector);
    forms.forEach(form => {
        form.addEventListener('submit', submitForm);
        const inputs = form.querySelectorAll(inputSelector);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(form, input, rest);
            });

        });
        toggleSubmitButton(form, rest);
    });
}

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__error_active',
    errorSelector: '.popup__error',
    inactiveButtonClass: 'popup__save_disabled'

});