import axios, { AxiosInstance } from 'axios';

import { API_STORE_URL } from '@/configs/api.config';

/**
 * An Axios instance pre-configured with the base URL of the store app API.
 * @type {AxiosInstance}
 */

export const http: AxiosInstance = axios.create({
	baseURL: API_STORE_URL,
});
