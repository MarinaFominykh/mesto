import { Popup } from './Popup.js';
const newPopupConfirmation = new Popup('.popup_type_confirmation');
export class Card {
    constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLlikeClick) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;
        this._ownerId = data.ownerId;
        this._template = document.querySelector(cardTemplateSelector).content.querySelector('.places__card');
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLlikeClick = handleLlikeClick;

    }

    isLiked() {
        const userHasLikedCard = this._likes.find(user => user._id === this._userId)
        return userHasLikedCard
    }
    setLikes(newLikes) {
        this._likes = newLikes
        const likeCountElement = this._cardElement.querySelector('.places__like-count');
        likeCountElement.textContent = this._likes.length;
        if (this.isLiked()) { this._addLikeIcon() } else { this._removeLikeIcon() }
    }

    _addLikeIcon() {
        this._likeButton.classList.add('places__like_activ')
    }

    _removeLikeIcon() {
        this._likeButton.classList.remove('places__like_activ')
    }


    deleteCard = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }

    //Новое
    _openConfirmationPopup = () => {
        newPopupConfirmation.open();
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => { this._handleLlikeClick(this._id) });
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
        this._cardImage.addEventListener('click', () => { this._handleCardClick() });
    }


    getCard = () => {
        this._cardElement = this._template.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.places__image');
        this._cardTitle = this._cardElement.querySelector('.places__name');
        this._deleteButton = this._cardElement.querySelector('.places__delete-button');
        this._likeButton = this._cardElement.querySelector('.places__like');
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._setEventListeners();
        this.setLikes(this._likes);
        if (this._ownerId !== this._userId) {
            this._cardElement.querySelector('.places__delete-button').style.display = 'none'
        }
        return this._cardElement
    };

}