/* Это класс для хранения и отрисовки карточек.
Метод constructor этого класса должен принимать два аргумента:

DOM-элемент — контейнер, куда нужно складывать карточки;
массив карточек, которые будут на странице при загрузке.

Ещё у класса CardList должно быть два метода:

addCard для добавления карточки в список, принимает на вход экземпляр карточки;
render для отрисовки карточек при загрузке страницы.*/
 class CardList {
  constructor(element, mesto, api) {
    this.element = element;
    this.placeList = mesto;
    this.api = api;


  }

  // Создает карточку и добавляет на страницу
  addCard(cardName, cardLink, cardLikes, cardOwnerID, cardID) {

    return this.placeList.insertAdjacentHTML('beforeEnd', this.element.getTemplate(cardName, cardLink, cardLikes, cardOwnerID, cardID) );
  }

  addListeners() {
    this.placeList.addEventListener('click', this.element.likeHandler);
    this.placeList.addEventListener('click', this.element.removeCard);
  }

 render(card) {

    card.forEach((card) => {
            this.addCard(card.name, card.link, card.likes, card.owner._id, card._id);
            //this.addUserDeleteIcon();
    });
  }
  apiData(){
    this.api.getCards()
        .then((data) => {
          this.render(data);
        })
        .catch(error => {})
  }



  
}
export {CardList};