/* Класс для работы с данными пользователя. Экземпляр этого класса должен хранить в себе
 данные пользователя: имя и информацию о себе, а также отображать эту информацию на странице.
Для этого класса нужно определить методы:

setUserInfo, чтобы обновлять данные внутри экземпляра класса;
updateUserInfo, чтобы отображать эти данные на странице.

Логичный вопрос: почему не объединить эти методы в один, который бы обновлял данные и затем выводил на экран?
Первая причина — принцип разделения ответственности. Лучше, чтобы каждый метод отвечал за небольшую часть функциональности.
Вторая причина станет понятна в следующем спринте, — когда мы подключим проект к серверу. Тогда, чтобы обновить данные,
 сначала нужно будет отправить запрос на сервер, дождаться ответа и только после этого обновить DOM.
 Поэтому лучше сразу вынести обновление DOM в отдельную функцию.*/

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
        .catch(error => console.log(error));
     /*    .finally(() => {
      this.renderLoading(false);
    });*/
    // Отправляю данные на сервер,

    this.namepage = this.nameCont.textContent;
    this.jobpage = this.jobCont.textContent;
  };
  getInfo(){

    this.api.getUser()
        .then((data) => {
          this.nameCont.textContent = data.name;
          this.jobCont.textContent = data.about; 
        })
        .catch(error => console.log(error))

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


