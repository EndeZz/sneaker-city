import { IProducts } from "@/models/product.interfaces";
import axios from "axios";

export const fetchProductsByCategory = async (category: string) => {
  try {
    const currentUrl = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`;

    const respValues = await axios.get<IProducts[]>(currentUrl);
    const dataValues = respValues.data;

    return dataValues;
  } catch (e) {
    throw new Error();
  }
};

export const fetchCategories = async () => {
  try {
    const respValues = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    const dataVales = respValues.data;

    return dataVales;
  } catch (e) {
    throw new Error();
  }
};
