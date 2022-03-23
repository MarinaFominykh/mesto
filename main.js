(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_validateInput",(function(e){var t=o._form.querySelector("#error-".concat(e.id));e.validity.valid?o._hideInputError(e,t):o._showInputError(e,t)})),t(this,"_setEventListener",(function(){o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._validateInput(e),o.toggleSubmitButton()}))}))})),this._form=r,this._setting=e,this._inputList=Array.from(this._form.querySelectorAll(this._setting.inputSelector)),this._button=this._form.querySelector(this._setting.buttonSelector)}var r,o;return r=n,(o=[{key:"_showInputError",value:function(e,t){e.classList.add(this._setting.inputErrorClass),t.classList.add(this._setting.errorActiveClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._setting.inputErrorClass),t.classList.remove(this._setting.errorActiveClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this.toggleSubmitButton(),this._inputList.forEach((function(t){var n=e._form.querySelector("#error-".concat(t.id));e._hideInputError(t,n)}))}},{key:"toggleSubmitButton",value:function(){this._form.checkValidity()?(this._button.classList.remove(this._setting.inactiveButtonClass),this._button.removeAttribute("disabled")):(this._button.classList.add(this._setting.inactiveButtonClass),this._button.setAttribute("disabled","true"))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,r,i,a){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"deleteCard",(function(){u._cardElement.remove(),u._cardElement=null})),o(this,"getCard",(function(){return u._cardElement=u._template.cloneNode(!0),u._cardImage=u._cardElement.querySelector(".places__image"),u._cardTitle=u._cardElement.querySelector(".places__name"),u._deleteButton=u._cardElement.querySelector(".places__delete-button"),u._likeButton=u._cardElement.querySelector(".places__like"),u._cardTitle.textContent=u._name,u._cardImage.src=u._link,u._cardImage.alt=u._name,u._setEventListeners(),u.setLikes(u._likes),u._ownerId!==u._userId&&(u._cardElement.querySelector(".places__delete-button").style.display="none"),u._cardElement})),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._template=document.querySelector(n).content.querySelector(".places__card"),this._handleCardClick=r,this._handleDeleteClick=i,this._handleLlikeClick=a}var t,n;return t=e,(n=[{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._cardElement.querySelector(".places__like-count").textContent=this._likes.length,this.isLiked()?this._addLikeIcon():this._removeLikeIcon()}},{key:"_addLikeIcon",value:function(){this._likeButton.classList.add("places__like_activ")}},{key:"_removeLikeIcon",value:function(){this._likeButton.classList.remove("places__like_activ")}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLlikeClick(e._id)})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteClick(e._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function _(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageActive=t._popup.querySelector(".popup__image-activ"),t._imageText=t._popup.querySelector(".popup__image-text"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imageActive.src=t,this._imageText.textContent=e,this._imageActive.alt=e,l(d(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.userName=this._userName.textContent,this._userInfo.userJob=this._userJob.textContent,this._userInfo}},{key:"setUserInfo",value:function(e,t,n){this._userName.textContent=e,this._userJob.textContent=t,this._avatar.src=n}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitForm=r,n._form=n._popup.querySelector(".popup__container"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._submitButton=n._form.querySelector(".popup__save"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitButton.textContent="Сохранение...",e._submitForm(e._getInputValues())})),k(E(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){k(E(a.prototype),"close",this).call(this),this._form.reset()}},{key:"submitButtonText",value:function(e){this._submitButton.textContent=e}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function q(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitForm=r,n._form=n._popup.querySelector(".popup__container"),n._submitButton=n._form.querySelector(".popup__save"),n}return t=a,(n=[{key:"changeSubmitHandler",value:function(e){this._submitForm=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitButton.textContent="Сохранение...",e._submitForm()})),C(R(a.prototype),"setEventListeners",this).call(this)}},{key:"submitButtonText",value:function(e){this._submitButton.textContent=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),B=document.querySelector(".popup_type_edit"),x=document.querySelector(".popup_type_add-card"),A=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__add-button"),D=B.querySelector(".popup__container"),V=x.querySelector(".popup__container"),F=document.querySelector(".popup__input_type_name"),N=document.querySelector(".popup__input_type_job"),J=(document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_link"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".places__cards"),{formSelector:".popup__container",inputSelector:".popup__input",buttonSelector:".popup__save",inputErrorClass:"popup__input_type_error",errorActiveClass:"popup__error_active",errorSelector:".popup__error",inactiveButtonClass:"popup__save_disabled"}),H=document.querySelector(".popup_type_confirmation"),M=(H.querySelector(".popup__container"),document.querySelector(".popup_type_update-avatar").querySelector(".popup__container")),z=document.querySelector(".profile__hover-pen");function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}H.querySelector(".popup__save");var G=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q,W=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"e76a210a-db84-4a77-83b5-c66d729f53ba","Content-Type":"application/json"}});function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=[W.getProfile(),W.getInitialCards()];Promise.all(Y).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];re.setUserInfo(o.name,o.about,o.avatar),Q=o._id,i.forEach((function(e){var t=se({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:Q,ownerId:e.owner._id});Z.addItem(t)}))})).catch(console.log);var Z=new G({items:[],renderer:function(e){var t=se(e);Z.addItem(t)}},".places__cards");Z.renderItems();var ee=new n(J,D),te=new n(J,V),ne=new n(J,M);ee.enableValidation(),te.enableValidation(),ne.enableValidation();var re=new b({nameSelector:".profile__title",jobSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),oe=new h(".popup_type_activ-image");oe.setEventListeners();var ie=new O({submitForm:function(e){var t=e.name,n=e.job;console.log(e),W.editProfile(t,n).then((function(e){re.setUserInfo(t,n,e.avatar),ie.close()})).catch(console.log).finally((function(){ie.submitButtonText("Сохранить")}))}},".popup_type_edit");ie.setEventListeners();var ae=new O({submitForm:function(e){W.addCard(e.name,e.link).then((function(e){!function(e){var t=se(e);Z.addItem(t)}({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:Q,ownerId:e.owner._id}),ae.close()})).finally((function(){ae.submitButtonText("Создать")})).catch(console.log)}},".popup_type_add-card");ae.setEventListeners();var ue=new T({submitForm:function(){}},".popup_type_confirmation");ue.setEventListeners();var ce=new O({submitForm:function(e){W.updateAvatar(e.link).then((function(e){console.log(e.about),re.setUserInfo(e.name,e.about,e.avatar),ce.close()})).catch(console.log).finally((function(){ce.submitButtonText("Сохранить")}))}},".popup_type_update-avatar");function se(e){var t=new i(e,".card-template",(function(){oe.open(e.name,e.link)}),(function(e){ue.open(),ue.changeSubmitHandler((function(){W.deleteCard(e).then((function(e){t.deleteCard(),ue.close()})).catch(console.log).finally((function(){ue.submitButtonText("Да")}))}))}),(function(e){t.isLiked()?W.deleteLike(e).then((function(e){e.likes,t.setLikes(e.likes)})).catch(console.log):W.addLike(e).then((function(e){e.likes,t.setLikes(e.likes)})).catch(console.log)}));return t.getCard()}ce.setEventListeners(),A.addEventListener("click",(function(){var e,t,n;t=(e=re.getUserInfo()).userName,n=e.userJob,F.value=t,N.value=n,ie.open(),ee.resetValidation()})),U.addEventListener("click",(function(){ae.open(),te.toggleSubmitButton(),te.resetValidation()})),z.addEventListener("click",(function(){ce.open(),ne.toggleSubmitButton()}))})();