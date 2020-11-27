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
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};
export type Seasonal = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};

export type Classics = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};

export type Desserts = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};

export type Sandwiches = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};

export type Sausages = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};

export type Sides = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};

export type Salads = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};

export type Snacks = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};
export type Soups = {
  id: number;
  passwordHash: string;
  name: string;
  germanName: string;
  description: string;
  germanDescription: string;
  allergens: string;
  price: number;

};