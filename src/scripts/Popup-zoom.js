import {Popup} from "./Popup";
class PopupZoom extends Popup {


  /* open(event) {

     if (event.target.classList.contains('place-card__image')) {
       super.open(event);
       // Надо исправить
       // Нельзя обращаться к глобальным переменным из класса, создавать сущности других классов напрямую.
       // Класс -- объект самодостаточный, ему необходимо данные передавать в конструктор или в методы в конце концов.
       // Если этот класс будет включен в другой проект, то тогда придется тянуть за собой все глобальные объекты,
       // к которым он обращается.
     }
   } */

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