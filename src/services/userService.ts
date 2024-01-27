import { User } from "../types/generalTypes";

export const USERS_DATA: User[] = [
  {
    id:'1',
    username: 'shir',
    email: 'shir@example.com',
    password: 'shir',
    image: 'https://example.com/shir.jpg',
    favoriteSport: 'Football',
  },
  {
    id:'2',
    username: 'linor',
    email: 'linor@example.com',
    password: 'linor',
    image: 'https://example.com/linor.jpg',
    favoriteSport: 'Basketball',
  },
];
  
export const checkUserExistence = (users: User[], username: string, password: string): User | false => {
  const matchingUser = users.find(user => user.username === username && user.password === password);
  return matchingUser || false;
};
  
export const sports = [
  'Football',
  'Basketball',
  'Tennis',
];

