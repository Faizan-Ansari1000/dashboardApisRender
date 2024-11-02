import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/1'
});

export default apiInstance;