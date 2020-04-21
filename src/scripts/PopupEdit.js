import {Popup} from "./Popup";
class PopupEdit extends Popup {
  constructor(containerPopup, userInfo) {
    super(containerPopup);
    this.userInfo = userInfo;

  }

  open() {

    this.userInfo.pushinput();
    super.open();

  }
  updateInfo = (event) => {
    event.preventDefault();
    this.userInfo.updateUserInfo(event);
    setTimeout(this.popupClose, 1500  , event);
  }




  popupClose = (event) =>{
    console.log('this', this);
    this.userInfo.renderLoading(false);
    const popup1 = event.target.closest('.popup');
    popup1.classList.remove('popup_is-opened');
}

  close = (event) => {
    const errorJobInput = this.containerPopup.querySelector('#error-aboutMe');
    const errorNameInput = this.containerPopup.querySelector('#error-newUserName');
    if (event.target.classList.contains('popup__close')) {

      const popup1 = event.target.closest('.popup');
      popup1.classList.remove('popup_is-opened');

      errorJobInput.textContent = "";
      errorNameInput.textContent = "";
    }
  }

}

export {PopupEdit};