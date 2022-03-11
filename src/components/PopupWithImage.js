import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageActive = this._popup.querySelector('.popup__image-activ');
        this._imageText = this._popup.querySelector('.popup__image-text');
    }
    open(name, link) {

        this._imageActive.src = link
        this._imageText.textContent = name
        this._imageActive.alt = name
            // imagePopupToggle.open()
        super.open();


    }
}