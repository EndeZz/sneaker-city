import { IProduct } from "@/models/product.interfaces";
import { useProductsStore } from "@/store";
import { storeToRefs } from "pinia";

export const setNewProduct = (product: IProduct) => {
  const productStore = useProductsStore();
  const { favoriteProducts } = storeToRefs(productStore);

  const newProduct = product;

  product.isLiked = false;

  if (favoriteProducts.value.includes(newProduct.id)) newProduct.isLiked = true;

  return newProduct;
};

export const setNewProducts = (products: IProduct[]) =>
  products.forEach((product) => {
    setNewProduct(product);
  });
