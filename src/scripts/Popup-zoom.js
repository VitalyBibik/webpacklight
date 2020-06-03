import {Popup} from "./Popup";
class PopupZoom extends Popup {


  open = (event) => {

    if (event.target.classList.contains('place-card__image')) {

      const popup = this.containerPopup.querySelector('.popup');
      const photo = this.containerPopup.querySelector('.popup__container');
      photo.setAttribute('style', `background-image:${event.target.style.backgroundImage}`);
      super.open();
    }
  }
}
export {PopupZoom};