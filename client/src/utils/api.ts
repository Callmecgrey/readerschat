// Mock API calls

export const login = async (username: string, password: string) => {
    return { success: true, token: 'fake-jwt-token' };
  };
  
  export const signup = async (username: string, password: string) => {
    return { success: true, token: 'fake-jwt-token' };
  };
  
  export const fetchMessages = async () => {
    return [
      { id: 1, text: 'Hello!' },
      { id: 2, text: 'How are you?' },
      { id: 3, text: 'I am good, thanks!' }
    ];
  };
  
  export const fetchReaders = async () => {
    return [
      { id: 1, name: 'Reader1' },
      { id: 2, name: 'Reader2' },
      { id: 3, name: 'Reader3' }
    ];
  };
  