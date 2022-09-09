import { API_CONFIG } from "@/constants/api.constant";
import { IProduct } from "@/models/product.interfaces";
import axios from "axios";

export const fetchProductsByCategory = async (category: string) => {
  try {
    const currentUrl = category
      ? `${API_CONFIG}/category/${category}`
      : `${API_CONFIG}`;

    const respValues = await axios.get<IProduct[]>(currentUrl);
    const dataValues = respValues.data;

    return dataValues;
  } catch (e) {
    throw new Error("Failed to connect to API");
  }
};

export const fetchCategories = async () => {
  try {
    const respValues = await axios.get<string[]>(`${API_CONFIG}/categories`);
    const dataVales = respValues.data;

    return dataVales;
  } catch (e) {
    throw new Error("Failed to connect to API");
  }
};

export const fetchProduct = async (productId: number) => {
  try {
    const respValues = await axios.get<IProduct>(`${API_CONFIG}/${productId}`);
    const dataVales = respValues.data;

    return dataVales;
  } catch (e) {
    throw new Error("Failed to connect to API");
  }
};
