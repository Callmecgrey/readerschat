// Mock authentication utility functions

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };
  
  export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };
  
  export const clearToken = () => {
    localStorage.removeItem('token');
  };
  