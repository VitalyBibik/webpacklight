import {Popup} from "./Popup";

class PopupNewPlace extends Popup {
  constructor(containerPopup, cardList, api, spinner) {
    super(containerPopup);
    this.cardList = cardList;
    this.containerPopup = containerPopup;
    this.api = api;
    this.spinner = spinner;
  }

  prepareData = (event) => {

    event.preventDefault();

    this.renderLoading(true);

    const placePopup = this.containerPopup.querySelector('#new');
    const placeName = placePopup.querySelector('#newPlace').value;
    const placeLink = placePopup.querySelector('#newlink').value;

    const objCard = {placeName, placeLink}; // Записываю карточку в обьект

     this.api.uploadCards(placeName, placeLink) // Отправляю данные на сервер
    .catch(error =>{})
    .finally(() => {
      this.renderLoading(false);
      placePopup.reset();
      this.containerPopup.classList.remove('popup_is-opened');
    });

    this.cardList.apiData();



    // Рендерю новую карточку
  }
  renderLoading = (isLoading) =>{
    if (isLoading){

      this.spinner.classList.add('spinner_visible');
    } else {
      this.spinner.classList.remove('spinner_visible');
    }
  }



  close = (event) => {

    const form = this.containerPopup.querySelector('#new');
    const errorPlaceInput = this.containerPopup.querySelector('#error-newPlace');
    const ErrorLinkInput = this.containerPopup.querySelector('#error-newlink');
    if (event.target.classList.contains('popup__close')) {
      const popup1 = event.target.closest('.popup');
      popup1.classList.remove('popup_is-opened');
      form.reset();
      errorPlaceInput.textContent = "";
      ErrorLinkInput.textContent = "";
    }

  }
}
export {PopupNewPlace}
