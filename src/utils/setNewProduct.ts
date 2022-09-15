import { IProduct } from "@/models/product.interfaces";
import { useProductsStore } from "@/store";

export const setNewProduct = (product: IProduct) => {
  const store = useProductsStore();
  const newProduct = product;
  product.isLiked = false;

  if (store.favoriteProducts.includes(newProduct.id)) newProduct.isLiked = true;

  return newProduct;
};

export const setNewProducts = (products: IProduct[]) =>
  products.forEach((product) => {
    setNewProduct(product);
  });
