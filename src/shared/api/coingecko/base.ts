import axios from 'axios';
// import { API_URL } from 'shared/config';

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
});
