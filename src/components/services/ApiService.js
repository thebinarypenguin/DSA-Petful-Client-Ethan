import config from "../config";

const ApiService = {
  getDog() {
    return fetch(`${config.API_ENDPOINT}/dog`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getCat() {
    return fetch(`${config.API_ENDPOINT}/cat`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  adoptDog() {
    return fetch(`${config.API_ENDPOINT}/dog`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer xxxxxxxxxxxxxx`
      }
    });
  },
  adoptCat() {
    return fetch(`${config.API_ENDPOINT}/cat`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer xxxxxxxxxxxxxx`
      }
    });
  },
  getToken() {
    return fetch(`${config.API_ENDPOINT}/token`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    ).then(obj => obj.token)
  },
};

export default ApiService;
