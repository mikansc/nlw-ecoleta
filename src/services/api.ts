import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mn-ecoleta.herokuapp.com/',
});

export default api;
