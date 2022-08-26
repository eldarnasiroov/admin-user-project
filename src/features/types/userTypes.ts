export interface IMenu {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
}
export interface IMenuInitialState {
  menu: IMenu[];
  categories: any[]
}

export interface IProducts {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
  count: number;
  totalPrice: number | null;
}
export interface IProductsPayload {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
  save: boolean;
}

export interface IUsersData {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  cart: IProducts[];
  favorites: IProductsPayload[];
  permission: boolean;
  totalPrice: number
}

export interface IUserInitialState {
  usersData: IUsersData[];
}
export interface ILoginPayload {
  username: string;
  password: string;
}
export interface IRegistrationDataPayload {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  verificationPassword: string;
}
export interface ICategory {
  title: string;
  name: string;
  img: string;
}
export type ProductType = {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
}
export type ProductTypeInCart = {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
  count: number;
  totalPrice: number | null;
};

export interface IProductsUserMain {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
}
export interface IUsersDataUserMain {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  cart: IProductsUserMain[];
  favorites: IProductsUserMain[];
  permission: boolean;
}
export type UserDataType = IUsersDataUserMain | undefined