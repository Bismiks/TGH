import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.quotable.io/random"
})

export default instance;