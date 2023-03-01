export interface User {
  username: string;
  email: string;
  token: string;
  shoppingCard: Car[];
}

export interface UserState extends User {
  isLogged: boolean;
}

export enum Status {
  received,
  inProgress,
  completed,
}

export interface Order {
  status: Status;
  id: number;
}

export interface Car {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  isAvailable: boolean;
}
