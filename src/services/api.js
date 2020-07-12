import axios from 'axios';

const api = axios.create({
    baseURL: 'https://utility-thermometer.herokuapp.com/'
});

export default api;