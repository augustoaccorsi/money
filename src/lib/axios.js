import axios from 'axios';

const TRANSACTION_API = 'http://localhost:3333/';

export const API = axios.create({
    baseURL: TRANSACTION_API,
});
