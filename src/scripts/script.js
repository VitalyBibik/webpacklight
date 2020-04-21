// import
import {Config} from './Config.js';
import {Card} from "./Card";
import {CardList} from "./Cardlist";
import {PopupAvatar} from "./Popup-avatar";
import {PopupNewPlace} from "./Popup-newPlace";
import {PopupZoom} from "./Popup-zoom";
import {PopupEdit} from "./PopupEdit";
import {UserInfo} from "./UserInfo";
import {Api} from "./Api";
import {FormValidator} from "./FormValidator";
import '../pages/index.css'
export const options = JSON.parse(Config);
// Переменные

const placesList = document.querySelector('.places-list'); // Область карточек


const spinnerEdit = document.querySelector('#spinnerEdit'); // Form 'UserINfo'
// Popup Edit
const formEditProfile = document.querySelector('#editProfile'); // "Редактировать профиль форма"
const name = document.querySelector('#newUserName'); // "Редактировать профиль форма" имя пол-ля 
const job = document.querySelector('#aboutMe'); // "Редактировать профиль форма"  Работа
const nameContainer = document.querySelector('.user-info__name'); // Имя на странице
const jobContainer = document.querySelector('.user-info__job'); // Работа на странице
const formEditContainer = document.querySelector('.popup_profile'); // "Редактировать профиль  контейнер"

const buttonEditSave = document.querySelector('#submit'); // "Редактировать профиль форма" кнопка сохранения 
const buttonEdit = document.querySelector('.user-info__edit-btn'); // "Редактировать профиль форма" "Edit" кнопка


// Popup NewPlace
const formNew = document.querySelector('#new'); // "Новое место"
const popupPlace = document.querySelector('.popup_place'); // "Новое место контейнер"
const buttonPlace = document.querySelector('.user-info__button'); // "Новое место" кнопка + on page

const buttonPlaceSave = document.querySelector('#submitPlace'); // "Новое место" кнопка + форма

const spinnerPlace = document.querySelector('#spinnerPlace');

// Popup ZooM
const popupImg = document.querySelector('.popup_image'); // "Zoom" для всплывающего блока

// Popup Avatar
const popupAvatarUser = document.querySelector('.popup_avatar'); // "Avatar" для всплывающего блока

const popupFormAvatar = document.querySelector('#avatar'); // 'Avatar' Form
const buttonAvatar = document.querySelector('.user-info__photo'); // 'Avatar' image button
const buttonAvatarSave = document.querySelector('#submitAvatar'); // 'Avatar' save button

const userAvatar = document.querySelector('.user-info__photo'); // 'Avatar' изображение на стр

// Validator
const errorMessages = {
    valueMissing: "Это обязательное поле",
    tooShort: "Должно быть от 2 до 30 символов",
    tooLong: "Должно быть от 2 до 30 символов",
    typeMismatch: "Здесь должна быть ссылка"
}; // Массив ошибок


// Экземпляры

/* API */
const api = new Api(options);
// api.setUser('name', 'ssss'); it is work!

/* Card */
const cardDefault = new Card(api);

/* Cardlist */
const cardStart = new CardList(cardDefault, placesList, api);

/* User Info */
const userInfoData = new UserInfo(name, job, nameContainer, jobContainer, api, spinnerEdit);

userInfoData.getInfo();

/* Popup Edit */
const popupEdit = new PopupEdit(formEditContainer, userInfoData, api);

/* Popup NewPlace */
const newPlace = new PopupNewPlace(popupPlace, cardStart, api, spinnerPlace);

/* Popup Zoom */
const popupZoom = new PopupZoom(popupImg);

/* Popup Avatar */
const popupAvatar = new PopupAvatar(popupAvatarUser, api, userAvatar);

//api.getAvatar();
popupAvatar.renderAvatarFirst();

/* Validator */
const editValidator = new FormValidator(formEditProfile, buttonEditSave, errorMessages);
const addValidator = new FormValidator(formNew, buttonPlaceSave, errorMessages);
const avatarValidator = new FormValidator(popupFormAvatar, buttonAvatarSave, errorMessages);

// Методы

/* Cardlist */

//cardStart.render();
cardStart.apiData(); // API + CardLIst
cardStart.addListeners();


/* Popup Edit */
popupEdit.addListenerClose();


/* Popup NewPlace */
newPlace.addListenerClose();

/* Popup Zoom */
popupZoom.addListenerClose();

/* Popup Avatar */
popupAvatar.addListenerClose();


/* Validator */
editValidator.setEventListeners();
addValidator.setEventListeners();
avatarValidator.setEventListeners();

// Cлушатели

/* Popup Edit */
buttonEdit.addEventListener('click', popupEdit.open.bind(popupEdit));
buttonEditSave.addEventListener('click', popupEdit.updateInfo.bind(userInfoData).bind(userInfoData));

/* Popup NewPlace */
buttonPlace.addEventListener('click', newPlace.open.bind(newPlace));
buttonPlaceSave.addEventListener('click', newPlace.prepareData.bind(newPlace));

/* Popup ZooM */
placesList.addEventListener('click', popupZoom.open.bind(popupZoom));

/* Popup Avatar */
buttonAvatar.addEventListener('click', popupAvatar.open.bind(popupAvatar));
buttonAvatarSave.addEventListener('click', popupAvatar.sendAvatar.bind(popupAvatar));


/**
* Здравствуйте.
*
* Очень хорошая работа.
 Но хотелось бы чтобы вы поправили
 Данные об адресе "https://praktikum.tk/cohort9/" использовали. А то вы передаёте в baseUrl, но не используете
    то же данные по авторизации '41b0685a-8626-46fa-882b-88da0ea48249'
    Надо исправить: Необходимо в методы добавить обработку ошибок
      .catch((err) => {
    	console.log(err);
    	});

    * Класс Api это отдельный класс который ничего не знает о других классах и методах
    * Вы можете только получать данные из этого класса и использовать эти данные.
    * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
    * скажу что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
    * Который только возвращает данные, а вы можите получить только обращась к этим методам.
    * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратиться к методам.
    * Отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
    * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
    *

*
 *
*/

/**
 * Здравствуйте,
 * работа принимается
 *
 *
 */