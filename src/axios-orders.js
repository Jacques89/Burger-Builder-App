import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jacques-burger-app.firebaseio.com/'
});

export default instance;