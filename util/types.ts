export type User = {
  id: number;
  passwordHash: string;
  username: string;
};

export type Session = {
  id: number;
  token: string;
  expiryTimestamp: Date;
  userId: number;
};

export type Bbq = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: String;
  germanDescription: String;
  allergens: String;
  price: number;

};