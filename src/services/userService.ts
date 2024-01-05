
const users = [
    { username: 'shir', password: 'shir' },
    { username: 'linor', password: 'linor' },
  ];
  
  export const checkUserExistence = (username: string, password: string): boolean => {
    return users.some(user => user.username === username && user.password === password);
  };
  