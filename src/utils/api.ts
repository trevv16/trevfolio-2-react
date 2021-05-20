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

  upload(verb: any, url: string, data: any) {
    switch (verb.toLowerCase()) {
      case 'post':
        return axios.post(`${API}/${url}`, data, { headers: headers() });
      case 'put':
        return axios.put(`${API}/${url}`, data, { headers: headers() });
      case 'patch':
        return axios.patch(`${API}/${url}`, data, { headers: headers() });
      default:
        return axios.post(`${API}/${url}`, data, { headers: headers() });
    }
  },

  post(url: string, data: any) {
    return axios.post(`${API}/${url}`, data, { headers: headers() });
  },

  put(url: string, data: any) {
    return axios.put(`${API}/${url}`, data, { headers: headers() });
  },

  patch(url: string, data: any) {
    return axios.patch(`${API}/${url}`, data, { headers: headers() });
  },

  delete(url: string) {
    return axios.delete(`${API}/${url}`, { headers: headers() });
  }
};
