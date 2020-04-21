import {Popup} from "./Popup";

class PopupAvatar extends Popup {
constructor(containerPopup, api, pageElement){
  super(containerPopup);
  this.api = api;
  this.pageElement = pageElement;

}
 
  
   /* open = () => {
      super.open();
       console.log(this.api, ' thisapi');
    }; */


    sendAvatar = (event) => {
        event.preventDefault();

        const placePopup = this.containerPopup.querySelector('#avatar'); // Форма
        const placeLink = placePopup.querySelector('#newlinkAvatar').value; // инпут
        console.log(placeLink, 'sss');



        this.api.setAvatar(placeLink)
            .catch(error => console.log(error));
        // send on server

        this.api.getAvatar()
            .then((data) => {
                console.log((data));
                this.renderAvatar(data);
            })
            .catch(error => console.log(error));
        // Принятие с сервера

        placePopup.reset();
        this.containerPopup.classList.remove('popup_is-opened');
    };

    renderAvatar(dataImg){
        this.pageElement.setAttribute('style', `background-image:url(${dataImg.avatar}`);
    }

    renderAvatarFirst(){
        this.api.getAvatar()
            .then((data) =>{
                this.renderAvatar(data);
            })
            .catch(error => console.log(error));
    }
  
  
  
    close = (event) => {
  
      const form = this.containerPopup.querySelector('#avatar');
      const ErrorLinkInput = this.containerPopup.querySelector('#error-newlinkAvatar');
      if (event.target.classList.contains('popup__close')) {
        const popup1 = event.target.closest('.popup');
        popup1.classList.remove('popup_is-opened');
        form.reset();
        ErrorLinkInput.textContent = "";
      }
  
    }
  }
  export {PopupAvatar};