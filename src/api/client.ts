import axios, { AxiosResponse } from 'axios';

const client = axios.create({ 
    baseURL: process.env.REACT_APP_API_BASEURL 
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
	get: (url: string) => client.get(url).then(responseBody),
};

client.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error.response.data);
    }
);

export default client;