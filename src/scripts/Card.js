


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




  /* author: Если бы я знал регулярные выражения, то использовал бы их, но это следующий блок тем :(
 */

  // По этому поводу простой совет -- replace принимает не только регулярку, но и просто символы
  // Требуется заэкранировать пять опасных символов: ' " & < >
  // Замените их на аналоги по коду HTML  -- коды тут https://html5book.ru/specsimvoly-html/
  // Это уже обезопасит ввод на данном этапе.
  // Делаете массив объектов -- {символ: код}, пробегаетесь по массиву циклом делая replace символа на код
  /*sanitizeHTML(str) {
    // Достаточно расточительная безопасность,
    // Лучше через replace заменить опасные символы на безопасные
    // Вы же объект DOM каждый раз создаете, что ресурсоемко так или иначе
    // Исправьте пожалуйста
    // Хотя сам факт наличия проверки -- круто!
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  } */
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
/*
  addIconCard(element){

    if (element.includes('aae80730aff6f85bc5513f38')){
      console.log('good');
      return element
    } else {
      console.log('popados');
      element = ''
      return element;
    }

  }
*/

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
  } // skobka methid



}

export {Card};

