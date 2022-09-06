export interface IRating {
  count: number;
  rate: number;
}

export interface IProducts {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: IRating;
}
