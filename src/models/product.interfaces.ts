export interface IRating {
  count: number;
  rate: number;
}

export interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: IRating;
}

export interface IFilteredProducts {
  price: number[];
  rating: number;
}
