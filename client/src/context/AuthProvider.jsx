import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext();

 function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const nav = useNavigate();

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      if(user?.uid){
        setUser(user);
        localStorage.setItem('accessToken', user.accessToken);
        return;
      }

      setUser({});
      localStorage.clear();
      nav('/login')
    });

    return () => {
      unsubcribed();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes ={
  children: PropTypes.node
}

export default AuthProvider;