import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUser, removeToken } from '../utils/auth';

interface AuthContextProps {
  user: { username: string } | null;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  const logout = () => {
    removeToken();
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
