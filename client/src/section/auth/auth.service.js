import api from '@/app/hooks/api';

export const register = async (data) => await api.post('/user/register', data);
export const login = async (credentials) => await api.post('/user/login', credentials);
