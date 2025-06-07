import { create } from 'zustand';
import { login } from '../auth.service';

import toast from 'react-hot-toast';

export default create(set => ({
  name: null,
  username: null,
  role: null,

  login: async (credentials) => {
    try {
      const req = await login(credentials);
      const data = req.data.user;
  
      const { name, username, role } = data;
      set({ name, username, role });
      toast.success('Autenticado(a) com sucesso!');
    } catch (error) {
      const data = error.response.data;
      toast.error(data.message);
    }
  }
}));