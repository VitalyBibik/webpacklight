const serverUrl = NODE_ENV === 'development' ? 'http://nomoreparties.co' : 'https://nomoreparties.co';

const obj = {
    baseUrl: `${serverUrl}/cohort9`,
    headers: {
        authorization: '41b0685a-8626-46fa-882b-88da0ea48249',
        'Content-Type': 'application/json'
    }

};

export const Config = JSON.stringify(obj);
