import { User, Post,Category } from "../types/generalTypes";

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
    image: 'https://jewishvisual.com/wp-content/uploads/2016/07/pointing-up-girl.jpg',
    favoriteSport: 'Basketball',
  },
  {
    id:'3',
    username: 'niv',
    email: 'niv@example.com',
    password: 'niv',
    image: 'https://example.com/niv.jpg',
    favoriteSport: 'Tennis',
  },
  {
    id:'4',
    username: 'amir',
    email: 'amir@example.com',
    password: 'amir',
    image: 'https://example.com/amir.jpg',
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

export const categories: Category[] = [
  {
    id:'1',
    name: 'Football',
    image: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/7872660/large/9ad20d756256213c7c0945c26a78532c.png',
  },
  {
    id:'2',
    name: 'Basketball',
    image: 'https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/887791164230.jpg',
  },
  {
    id:'3',
    name: 'Tennis',
    image: 'https://www.lotems.co.il/images/itempics/349_160720231124481_large.jpg',
  },

];


export const posts: Post[] = [
  {
    id: '1',
    content: 'Exciting football match last night!',
    image: 'https://pic1.calcalist.co.il/PicServer2/20122005/364634/Barcelona-football_l.jpg',
    author: USERS_DATA[0],
    category: categories[0], 
    date: new Date('2024-01-27T12:30:00'), 
  },
  {
    id: '2',
    content: 'Exciting football match last night!',
    image: 'https://pic1.calcalist.co.il/PicServer2/20122005/364634/Barcelona-football_l.jpg',
    author: USERS_DATA[1],
    category: categories[0], 
    date: new Date('2024-01-27T12:30:00'), 
  },
  {
    id: '3',
    content: 'Basketball game highlights!',
    image: 'https://www.ncaa.org/images/2023/3/30/MBB-WBB_BallHoop.JPG',
    author: USERS_DATA[2],
    category: categories[1],
    date: new Date('2024-01-27T15:45:00'),
  },
  {
    id: '4',
    content: 'Basketball game highlights!',
    image: 'https://www.ncaa.org/images/2023/3/30/MBB-WBB_BallHoop.JPG',
    author: USERS_DATA[1],
    category: categories[1],
    date: new Date('2024-01-27T15:45:00'),
  },
  {
    id: '5',
    content: 'Basketball game highlights!',
    image: 'https://static.ffx.io/images/$zoom_0.147%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/4a1067e582159184bed0f68d4c84727b7ba84ff9',
    author: USERS_DATA[2],
    category: categories[2],
    date: new Date('2024-01-27T15:45:00'),
  },
  {
    id: '6',
    content: 'Basketball game highlights!',
    image: 'https://static.ffx.io/images/$zoom_0.147%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/4a1067e582159184bed0f68d4c84727b7ba84ff9',
    author: USERS_DATA[1],
    category: categories[2],
    date: new Date('2024-01-27T15:45:00'),
  },
];

