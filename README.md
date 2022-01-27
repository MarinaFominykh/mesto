# Проект: Место

Проект "Место" выполнен в рамках курса обучения по программе "Веб-разработчик". Цель проекта - получить практические навыки программирования на языке JavaScript, а также закрепить навыки адаптивной вёрстки, полученные на предыдущих курсах. 

В проекте реализован Popup - модальное окно, которое открывается при клике по кнопке "Редактировать", и закрывается при клике по крестику в правом верхнем углу окна. При открытии Popap поля формы заполнены значениями, которые отображаются на странице. После внесения изменений в поля формы и нажатия кнопки "Сохранить" информация о пользователе на странице обновляется. 

Подстановка значеий в поля формы выполена путем применения свойства texContent. Отслеживание действий пользователя - с помощью метода addEventListene. 

При написании HTML-кода применялась методология БЭМ. В проекте использована семантическая разметка. Файловая структура проекта также организована по методологии БЭМ.

На JavaScript реализована следующая функиональность:
- добавление на страницу при первоначальной загрузки 6 карточек с местами из массива;
- возможность добавления новых карточек, а также из удаления;
- возможность лайкать карточки;
- возможность редактирования данных профиля;
- валидация полей формы редактирования профиля и добавления карточек.

Ссылка на проект: https://marinafominykh.github.io/mesto/index.html



<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Denis Solodov">
    <meta name="description" content="проектная работа №4">
    <meta name="keywords" content="проектная, работа, 4, яндекс, практикум">
    <title>Mesto</title>
    <link rel="stylesheet" href="pages/index.css">
</head>
<body class="page">
  <header class="header">
    <img class="header__logo" src="images/header-logo.svg" alt="логотип">
  </header><!--end:header-->

  <main class="content">
    <section class="profile">
      <img class="profile__avatar" src="images/profile-avatar.jpg" alt="Жак-Ив Кусто">
      <div class="profile-info">
        <h1 class="profile-info__name" id="profile-info-name">Жак-Ив Кусто</h1>
        <p class="profile-info__about" id="profile-info-about">Исследователь океана</p>
        <button class="profile-info__edit-btn" id="edit-popup-btn" type="button" aria-label="Редактировать профиль"></button>
      </div><!--end:profile-info-->
      <button class="profile__add-btn" id="add-popup-btn" type="button" aria-label="Добавить картинку"></button>
    </section><!--end:profile-->

    <section class="photos" id="photos">
    </section><!--end:photos-->
  </main><!--end:content-->

  <footer class="footer">
    <p class="footer__copyright">&copy; 2021 Mesto Russia</p>
  </footer><!--end:footer-->

  <div class="popup" id="edit-popup">
    <div class="popup__container">
      <form class="form" name="edit-form" novalidate>
        <h2 class="form__title">Редактировать профиль</h2>
        <input class="form__input"
          type="text"
          name="name"
          id="input-name"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
          autocomplete="off"
        >
        <span class="form__error" id="error-input-name"></span>
        <input class="form__input"
          type="text"
          name="about"
          id="input-about"
          placeholder="Род занятий"
          minlength="2"
          maxlength="200"
          required
          autocomplete="off"
        >
        <span class="form__error" id="error-input-about"></span>
        <button class="form__button" type="submit">Сохранить</button>
      </form>
      <button class="popup__close-btn" type="button" aria-label="Закрыть"></button>
    </div>
  </div><!--end:popup-->

  <div class="popup" id="add-popup">
    <div class="popup__container">
      <form class="form" name="add-form" novalidate>
        <h2 class="form__title">Новое место</h2>
        <input class="form__input"
          type="text"
          name="img_title"
          id="input-title"
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
          autocomplete="off"
        >
        <span class="form__error" id="error-input-title"></span>
        <input class="form__input"
          type="url"
          name="img_link"
          id="input-link"
          placeholder="Ссылка на картинку"
          required
          autocomplete="off"
        >
        <span class="form__error" id="error-input-link"></span>
        <button class="form__button" type="submit">Сохранить</button>
      </form>
      <button class="popup__close-btn" type="button" aria-label="Закрыть"></button>
    </div>
  </div><!--end:popup-->

  <div class="popup" id="view-popup">
    <div class="popup__container">
      <figure class="view-photo">
        <img class="view-photo__img" src="#" alt="#">
        <figcaption class="view-photo__caption"></figcaption>
      </figure>
      <button class="popup__close-btn" type="button" aria-label="Закрыть"></button>
    </div>
  </div><!--end:popup-->

  <template id="card-template">
    <article class="photo">
      <img class="photo__img" src="#" alt="шаблон карточки">
      <div class="photo__caption">
        <h2 class="photo__title"></h2>
        <button class="photo__like-btn" type="button" aria-label="Нравится"></button>
      </div>
      <button class="photo__delete-btn" type="button" aria-label="Удалить"></button>
    </article><!--end:photo-->
  </template>

  <script src="scripts/index.js"></script>
  <script src="scripts/validate.js"></script>
</body>
</html>
