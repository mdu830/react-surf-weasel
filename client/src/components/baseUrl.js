import axios from 'axios';


const API = axios.create({
    baseURL: `https://services.surfline.com/`
});

export default API;