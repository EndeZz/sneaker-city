import { IProduct } from "@/models/product.interfaces";
import axios from "axios";

export const fetchProductsByCategory = async (category: string) => {
  try {
    const currentUrl = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`;

    const respValues = await axios.get<IProduct[]>(currentUrl);
    const dataValues = respValues.data;

    return dataValues;
  } catch (e) {
    throw new Error("Failed to connect API");
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
    throw new Error("Failed to connect API");
  }
};

export const fetchProduct = async (productId: number) => {
  try {
    const respValues = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    const dataVales = respValues.data;

    return dataVales;
  } catch (e) {
    throw new Error("Failed to connect API");
  }
};
