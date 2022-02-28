import { imagePopup } from './index.js';
import { openPopup } from './index.js';
export class Card {
    constructor(data, cardTemplateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(cardTemplateSelector).content.querySelector('.places__card');

    }

    _handleLikeIcon = () => {
        this._likeButton.classList.toggle('places__like_activ')
    }

    _handleDeleteCard = () => {
        this._cardElement.remove()
    }

    _handlePreviewPicture = () => {
        const imageActive = imagePopup.querySelector('.popup__image-activ');
        const imageText = imagePopup.querySelector('.popup__image-text');
        openPopup(imagePopup)
        imageActive.src = this._link
        imageText.textContent = this._name
        imageActive.alt = this._name

    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', this._handleLikeIcon);
        this._deleteButton.addEventListener('click', this._handleDeleteCard);
        this._cardImage.addEventListener('click', this._handlePreviewPicture);
    }

    getCard = () => {
        this._cardElement = this._template.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.places__image');
        this._cardTitle = this._cardElement.querySelector('.places__name');
        this._deleteButton = this._cardElement.querySelector('.places__delete-button');
        this._likeButton = this._cardElement.querySelector('.places__like');
        this._cardTitle.textContent = this._name
        this._cardImage.src = this._link
        this._cardImage.alt = this._name

        this._setEventListeners()

        return this._cardElement
    };

}