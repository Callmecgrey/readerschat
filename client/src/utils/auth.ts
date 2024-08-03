const TOKEN_KEY = 'readerschat_token';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getUser = async () => {
  const token = getToken();
  if (!token) {
    return null;
  }
  
  // Dummy user data for illustration purposes
  // In a real-world scenario, you would fetch user details from an API using the token
  return { username: 'John Doe' };
};
