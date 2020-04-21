/* Это класс для всплывающего окна. Добавьте ему методы open и close, чтобы показывать и скрывать попап. Есть два подхода, как можно реализовать всплывающие окна:
сделать единый контейнер для всех попапов и менять его содержимое при открытии;
сделать независимые попапы в разных контейнерах.
Первый способ одновременно лучше и сложнее. Но вы сами можете выбрать, как реализовать попап.*/

  class Popup {
  constructor(containerPopup) {
    this.containerPopup = containerPopup;

  }

  open() {
    this.containerPopup.classList.add('popup_is-opened');
  }

  close(event) {
    if (event.target.classList.contains('popup__close')) {
      const popup1 = event.target.closest('.popup');
      popup1.classList.remove('popup_is-opened');
    }
  }

  addListenerClose() {
    this.containerPopup.querySelector('.popup__close').addEventListener('click', this.close);
  }


}

export {Popup}












