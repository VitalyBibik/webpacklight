// "aae80730aff6f85bc5513f38"
// '41b0685a-8626-46fa-882b-88da0ea48249'
// ${this.getIconUserCard(cardID)}
debugger;
    class Api {
    constructor(options) {
        // тело конструктора
        this.options = options;
    }
// card.owner._id == 'aae80730aff6f85bc5513f38'
    getCards() {
        return fetch(`${this.options.baseUrl}/cards`, this.options)
            .then(res => {
                if (res.ok) {
                    return res.json()

                }
                return Promise.reject(`Что то пошло не так ${res.status}`)
            })
            .catch((err) => {

            });

    } 
    uploadCards(placeName, placeLink){
        return fetch(`${this.options.baseUrl}/cards`,{
            method: 'POST',
            headers: {
                authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: placeName,
                link: placeLink
            })
            
        })
    } 

    removeCardsAPI(placeLink){ // Сделать удаление карточки
        return fetch(`${this.options.baseUrl}/cards/${placeLink}`,{
            method: 'DELETE',
            headers: {
                authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);

    }).catch(err => {});
}
    // likes
    getLikes(placeLike){
        return fetch(`${this.options.baseUrl}/cards/like/${placeLike}`, {
            method: 'PUT',
            headers: {
                authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что то пошло не так ${res.status}`)
            })
            .catch((err) => {

            });
    }
    removeLikes(placeLikeRemove){
        return fetch(`${this.options.baseUrl}/cards/like/${placeLikeRemove}`, {
            method: 'DELETE',
            headers: {
                authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что то пошло не так ${res.status}`)
            })
            .catch((err) => {

            });
    }  

    getUser() {
        return fetch(`${this.options.baseUrl}/users/me`, this.options)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что то пошло не так ${res.status}`)
            })
            .catch((err) => {

            });

    }

    setUser(userName, UserJob) {
        return fetch(`${this.options.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                about: UserJob
            })
        })
            .then(res => {
                if (res.ok) {

                }
            })
            .catch((err) => {

            });

    }

    getAvatar(){
        return fetch(`${this.options.baseUrl}/users/me`,{
            method: 'GET',
            headers: {
                authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
                'Content-Type': 'application/json'
            }
        })
         .then(res => {
            if (res.ok) {

              return res.json();
            }
        })
        .catch((err) => {

        });
       
    }

    setAvatar(placeLink){
            return fetch(`${this.options.baseUrl}/users/me/avatar`,{
            method: 'PATCH',
            headers: {
                authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar:placeLink
            })
        })
         .then(res => {
            if (res.ok) {

            }
        })
        .catch((err) => {

        });
    }
}

export {Api};