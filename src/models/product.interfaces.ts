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
  isLiked: boolean;
}

export interface IFilteredProducts {
  price: number[];
  rating: number;
}
