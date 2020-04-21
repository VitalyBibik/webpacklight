


class Card {

  //  getTemplate - возвращает только шаблон, на вход получает данные любой карточки,
  //  на выходе только разметка, для единственной любой карточки
  constructor(api) {
    this.api = api;
  
  }
  getTemplate(cardName, cardLink, cardLikes, cardOwnerID, cardID) {
     return `<div class="place-card" id="${this.getIconUserCard(cardOwnerID, cardID)}">
          <div class="place-card__image" style="background-image: url(${this.sanitizeHTMLUpdate(cardLink)}">
          <button class="place-card__delete-icon${this.addIcon(cardOwnerID)}"></button>
          </div>
          <div class="place-card__description">
          <h3 class="place-card__name">${this.sanitizeHTMLUpdate(cardName)}</h3>
          <div class="counter">
            <button class="place-card__like-icon"></button>
            <p class="place-card__number-like">${this.getSumLike(cardLikes)}</p>
          </div>
          </div>
          </div>`
     ;
  }




  sanitizeHTMLUpdate(str) {
    let temp = str.replace(/[.*+?^${}()<>|[\]\\]/g, '\\$&');
    return temp;

  }
  getSumLike(cardLike) { 
    return cardLike.length;
    
  }


  getIconUserCard(cardOwnerID, cardID){
    // Сделать проверку ИД карточки админа с другими пользователями
    if (cardOwnerID === 'aae80730aff6f85bc5513f38'){

      return cardID;
    } else {
      return cardID;
    }
  }
  addIcon(cardOwnerID){
    if ( cardOwnerID === 'aae80730aff6f85bc5513f38'){
      return ' place-card__delete-icon_user';
    }
    else {
      return ''
    }

  }


  // Лайки
  likeHandler = event => {
    if (event.target.classList.contains('place-card__like-icon')) {
        this.api.getLikes(event.target.closest(".place-card").id)
            .then(res => {
              event.target.nextElementSibling.textContent = res.likes.length;
              event.target.classList.add("place-card__like-icon_liked");
              console.log('add',res);
            })
            .catch((err) => {
              console.log(err); // выведем ошибку в консоль
            });
    }
    if (event.target.classList.contains("place-card__like-icon_liked")){
        this.api.removeLikes(event.target.closest(".place-card").id)
            .then(res =>{
              event.target.nextElementSibling.textContent = res.likes.length;
              event.target.classList.remove("place-card__like-icon_liked");
              console.log('remover', res);
            })
            .catch((error)=>console.log(error))
            
    }
  };
  // Удаление карты 
  removeCard = event => {
    if (event.target.classList.contains('place-card__delete-icon')) {
      if (confirm("Вы уверены, что хотите удалить карточку?")) {
        this.api.removeCardsAPI(event.target.closest(".place-card").id)
            .catch((err) => {
                console.log(err);
            });
       
        const card = event.target.closest(".place-card");
        card.remove();
      }
    }
  }



}

export {Card};

