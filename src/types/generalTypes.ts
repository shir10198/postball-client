import exp from "constants";

export interface User {
  id?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  image?: string | undefined;
  favoriteSport?: string | undefined;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  // todo: add extra fileds according to tje server schema
}

export interface Post{
  id: string;
  content: string;
  image: string;
  author: User;
  category: Category;
  date: Date;
}



