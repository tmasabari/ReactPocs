import axios from 'axios';
export const Endpoints = Object.freeze({
    //DATA: '/data',
    DATA: '/items',
    USERS: '/users'
});

// Create a reusable Axios instance with a custom base URL
export const createApiService = (baseURL) =>
{
    const api = axios.create({
        baseURL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });

    return {
        get: (endpoint) => api.get(endpoint),
        getById: (endpoint, id) => api.get(endpoint + '/' + id),
        post: (endpoint, data) => api.post(endpoint, data),
        put: (endpoint, data) => api.put(endpoint, data),
        delete: (endpoint, id) => api.delete(endpoint + '/' + id),
    };
};
