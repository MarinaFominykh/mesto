export class Card {
    constructor(data, cardTemplateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(cardTemplateSelector).content.querySelector('.places__card');
        this._handleCardClick = handleCardClick;

    }

    _handleLikeIcon = () => {
        this._likeButton.classList.toggle('places__like_activ')
    }

    _handleDeleteCard = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }


    _setEventListeners() {
        this._likeButton.addEventListener('click', this._handleLikeIcon);
        this._deleteButton.addEventListener('click', this._handleDeleteCard);
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
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

        this._setEventListeners()

        return this._cardElement
    };

}