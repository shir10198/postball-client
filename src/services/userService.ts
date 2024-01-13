import { User } from "../types/generalTypes";

const users: User[] = [
  {
    username: 'shir',
    email: 'shir@example.com',
    password: 'shir',
    image: 'https://example.com/shir.jpg',
    favoriteSport: 'Football',
  },
  {
    username: 'linor',
    email: 'linor@example.com',
    password: 'linor',
    image: 'https://example.com/linor.jpg',
    favoriteSport: 'Basketball',
  },
];
  
export const checkUserExistence = (username: string, password: string): User | false => {
  const matchingUser = users.find(user => user.username === username && user.password === password);
  return matchingUser || false;
};
  
export const sports = [
  'Football',
  'Basketball',
  'Tennis',
];

