import axios from 'axios';
import Cookies from 'js-cookie';
const request = axios.create({
    baseURL: 'https://api.phuonghight.click',
    headers: {
        'Content-Type': 'application/json',
    },
});

request.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('hit14-vuejs:access-token');
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
request.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error);
        if (error.response.status == 401) {
            console.log('chuyen ve trang login');
        }
        return Promise.reject(error);
    },
);
export default request;
