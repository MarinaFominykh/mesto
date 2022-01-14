const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

];

const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_activ-image');

const editProfileButton = document.querySelector('.profile__edit-button');
const closeEditPopupButton = editPopup.querySelector('.popup__close');
const addCardButton = document.querySelector('.profile__add-button');
const closeAddCardPopupButton = addCardPopup.querySelector('.popup__close');
const closeImagePopupButton = imagePopup.querySelector('.popup__close');

const editForm = editPopup.querySelector('.popup__container');
const addCardForm = addCardPopup.querySelector('.popup__container');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const list = document.querySelector('.places__cards');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.places__card');

function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
}

closeEditPopupButton.addEventListener('click', () =>
    togglePopup(editPopup));

addCardButton.addEventListener('click', () =>
    togglePopup(addCardPopup));
closeAddCardPopupButton.addEventListener('click', () =>
    togglePopup(addCardPopup));
closeImagePopupButton.addEventListener('click', () =>
    togglePopup(imagePopup));

function fullInput() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    togglePopup(editPopup);
}
editProfileButton.addEventListener('click', fullInput);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    togglePopup(editPopup);
}

editForm.addEventListener('submit', formSubmitHandler);

addCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createCard({
        name: inputTitle.value,
        link: inputLink.value,
    });
    togglePopup(addCardPopup)
});

function getCard(item) {
    const cardElement = cardTemplate.cloneNode(true)
    const cardImage = cardElement.querySelector('.places__image')
    const cardTitle = cardElement.querySelector('.places__name')
    const deleteButton = cardElement.querySelector('.places__delete-button')
    const likeButton = cardElement.querySelector('.places__like')
    const imageActiv = imagePopup.querySelector('.popup__image-activ')
    const imageRext = imagePopup.querySelector('.popup__image-text')

    cardTitle.textContent = item.name
    cardImage.src = item.link
    cardImage.alt = item.name

    deleteButton.addEventListener('click', () => {
        cardElement.remove()
    })

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('places__like_activ')
    })

    cardImage.addEventListener('click', () => {
        togglePopup(imagePopup)
        imageActiv.src = item.link
        imageRext.textContent = item.name
    })

    return cardElement
};

function createCard(cardData) {
    const createCardElement = getCard(cardData)
    list.prepend(createCardElement)
};

initialCards.forEach(createCard);