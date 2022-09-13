import { IProduct } from "@/models/product.interfaces";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    favoriteProducts: getLocalStorage("favorite") as IProduct[],
  }),
  actions: {
    addToFavorite(product: IProduct) {
      this.favoriteProducts.push(product);
      setLocalStorage<IProduct[]>("favorite", this.favoriteProducts);
    },
    removeFromFavorite(product: IProduct) {
      this.favoriteProducts = this.favoriteProducts.filter(
        (favorite) => favorite.id !== product.id
      );
      setLocalStorage<IProduct[]>("favorite", this.favoriteProducts);
    },
  },
});
