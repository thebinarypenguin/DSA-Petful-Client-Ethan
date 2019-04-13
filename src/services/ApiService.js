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
    const token = window.localStorage.getItem('token');
    return fetch(`${config.API_ENDPOINT}/dog`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${token}`
      }
    });
  },
  adoptCat() {
    const token = window.localStorage.getItem('token');
    return fetch(`${config.API_ENDPOINT}/cat`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${token}`
      }
    });
  },
  getToken() {
    return fetch(`${config.API_ENDPOINT}/token`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  getPosition() {
    return fetch(`${config.API_ENDPOINT}/position`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  resetQueues() {
    return fetch(`${config.API_ENDPOINT}/reset`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
};

export default ApiService;
