/* eslint-disable security/detect-object-injection */
import axios from 'axios';
import Auth from '../Auth';

let API = '';

if (process.env.NODE_ENV === 'production') {
  API = `${process.env.REACT_APP_PROD_SERVER}`;
} else {
  API = `${process.env.REACT_APP_DEV_SERVER}`;
}

function headers() {
  const token = Auth.getToken();
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer: ${token}`
  };
}

function queryString(params: any) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

function fetch(url: string, params = {}) {
  return axios.get(`${API}/${url}${queryString(params)}`, {
    headers: headers()
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetch(url: string, params = {}) {
    return fetch(url, params);
  },

  post(url: string, data: any) {
    return axios.post(`${API}/${url}`, data, { headers: headers() });
  }
};
