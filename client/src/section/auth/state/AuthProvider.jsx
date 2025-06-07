import { createContext, useContext } from 'react';
import useAuthStore from './auth.store';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const auth = useAuthStore();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);