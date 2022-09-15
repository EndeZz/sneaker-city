import { IProduct } from "@/models/product.interfaces";
import {
  fetchProductsByCategory,
  getLocalStorage,
  setLocalStorage,
  setNewProducts,
} from "@/utils";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    currentProducts: [] as IProduct[],
    favoriteProducts: getLocalStorage("favorite") as number[],
    isLoading: false,
  }),
  actions: {
    async updateContentOnPage(category: string) {
      this.isLoading = true;
      this.currentProducts = await fetchProductsByCategory(category);
      setNewProducts(this.currentProducts);
      this.isLoading = false;
    },
    addToFavorite(id: number) {
      this.favoriteProducts = [...this.favoriteProducts, id];
      setLocalStorage<number[]>("favorite", this.favoriteProducts);
    },
    removeFromFavorite(id: number) {
      this.favoriteProducts = this.favoriteProducts.filter(
        (favoriteId) => favoriteId !== id
      );
      setLocalStorage<number[]>("favorite", this.favoriteProducts);
    },
  },
});
