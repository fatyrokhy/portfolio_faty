import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api`,
  timeout: 7000
});

export const portfolioService = {
  getAll: () => api.get('/portfolio').then(r => r.data.data),
};

export const contactService = {
  send: (payload) => api.post('/contact', payload).then(r => r.data)
};
