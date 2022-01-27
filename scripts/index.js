const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_activ-image');

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
const cardTemplate = document.querySelector('.card-template').content.querySelector('.places__card');

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

addCardButton.addEventListener('click', () => openPopup(addCardPopup));
closeEditPopupButton.addEventListener('click', () => closePopup(editPopup));
closeAddCardPopupButton.addEventListener('click', () => closePopup(addCardPopup));
closeImagePopupButton.addEventListener('click', () => closePopup(imagePopup));


//Функция, подставляющая значения профиля в поля формы при открытии
function handleOpenProfileForm() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    toggleSubmitButton(editForm, objectToggleSubmitBatton);
    openPopup(editPopup);
};

editProfileButton.addEventListener('click', handleOpenProfileForm);

//Функция, подставляющая значение из формы в поля профиля
function formEditPopapSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(editPopup);
};

editForm.addEventListener('submit', formEditPopapSubmitHandler);

addCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createCard({
        name: inputTitle.value,
        link: inputLink.value,
    })
    closePopup(addCardPopup);
    addCardForm.reset();
    toggleSubmitButton(addCardForm, objectToggleSubmitBatton);
});

function getCard(item) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.places__image');
    const cardTitle = cardElement.querySelector('.places__name');
    const deleteButton = cardElement.querySelector('.places__delete-button');
    const likeButton = cardElement.querySelector('.places__like');
    const imageActive = imagePopup.querySelector('.popup__image-activ');
    const imageText = imagePopup.querySelector('.popup__image-text');

    cardTitle.textContent = item.name
    cardImage.src = item.link
    cardImage.alt = item.name

    deleteButton.addEventListener('click', () => {
        cardElement.remove()
    });

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('places__like_activ')
    });

    cardImage.addEventListener('click', () => {
        openPopup(imagePopup)
        imageActive.src = item.link
        imageText.textContent = item.name
        imageActive.alt = item.name
    });

    return cardElement
};

function createCard(cardData) {
    const createCardElement = getCard(cardData)
    list.prepend(createCardElement)
};

initialCards.forEach(createCard);

//Закрытие модального окна кликом по оверлею
function closePopupOnOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.currentTarget)
    }
};

editPopup.addEventListener('click', closePopupOnOverlayClick);
addCardPopup.addEventListener('click', closePopupOnOverlayClick);
imagePopup.addEventListener('click', closePopupOnOverlayClick);