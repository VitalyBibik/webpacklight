
class UserInfo {
  constructor(name, job, nameCont, jobCont, api, spinner) {

    this.name = name; // NameInput форма
    this.job = job; // JobInput форма
    this.nameCont = nameCont; // NamePage на странице
    this.jobCont = jobCont; // JobPage на странице

    this.namepage = nameCont.textContent; // SaveNamePage Input
    this.jobpage = jobCont.textContent; // SaveJobPaeg Input

    this.api = api;
    this.spinner = spinner;
  }
  pushinput() {
    this.getInfo();
    if ( (this.nameCont.textContent !== this.namepage) && (this.jobCont.textContent !== this.jobpage) ){
      this.name.value = this.nameCont.textContent;
      this.job.value = this.jobCont.textContent;
    } else {
      this.name.value = this.namepage;
      this.job.value = this.jobpage;
    }
  }

  setUserInfo() {
    this.name.value = this.namepage; // верно данные конструктор, форма
    this.job.value = this.jobpage;  //верно даннные конструктор, форма
  }

  updateUserInfo = (event) => {
    this.renderLoading(true);
     this.nameCont.textContent = this.name.value; //  Форма => страница
     this.jobCont.textContent = this.job.value; //  Форма => страница

    const user = this.api.setUser(this.nameCont.textContent, this.jobCont.textContent)
        .catch(error =>{});

    this.namepage = this.nameCont.textContent;
    this.jobpage = this.jobCont.textContent;
  };
  getInfo(){

    this.api.getUser()
        .then((data) => {
          this.nameCont.textContent = data.name;
          this.jobCont.textContent = data.about; 
        })
        .catch(error =>{})

}

  renderLoading (isLoading){
    if (isLoading){
      this.spinner.classList.add('spinner_visible');
    } else {
      this.spinner.classList.remove('spinner_visible');
    }
  }

}

export {UserInfo}


