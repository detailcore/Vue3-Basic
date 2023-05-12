import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 5 * 1000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
  },
})


/**
 * API service with backend
 */
export * from '@/services/api/home.js'
// export * from '@/services/api/user'
