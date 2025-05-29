import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authUserInfo, setAuthUserInfo] = useLocalStorage('s11d2', null);
  const { push } = useHistory();

  const isLoggedIn = authUserInfo ? true : false;

  function login(data) {
    setAuthUserInfo(data);
  }

  function logout() {
    setAuthUserInfo(null);
    push('/login');
  }

  return (
    <AuthContext.Provider value={{ authUserInfo, login, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
