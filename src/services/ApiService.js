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
    })
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : null
    );
  },
  adoptCat() {
    const token = window.localStorage.getItem('token');
    return fetch(`${config.API_ENDPOINT}/cat`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${token}`
      }
    })
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : null
    );
  },
  getToken() {
    return fetch(`${config.API_ENDPOINT}/token`)
    .then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  getPosition() {
    const token = window.localStorage.getItem('token');
    return fetch(`${config.API_ENDPOINT}/position`, {
      headers: {
        authorization: `bearer ${token}`
      }
    })
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
