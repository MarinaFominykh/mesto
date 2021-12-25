const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);


const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const name = document.querySelector('.popup__input_self_name');
const job = document.querySelector('.popup__input_self_job');

function fullInput() {
    name.value = nameInput.textContent;
    job.value = jobInput.textContent;
    openPopup();
}

popupOpenButton.addEventListener('click', fullInput);

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = name.value;
    jobInput.textContent = job.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);