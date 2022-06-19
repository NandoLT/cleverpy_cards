import axios from 'axios';


const client = axios.create({ 
    baseURL: process.env.REACT_APP_API_BASEURL 
});


client.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error.response.data);
    }
);

export default client;