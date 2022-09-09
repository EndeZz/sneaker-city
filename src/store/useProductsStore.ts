import { IProducts } from "@/models/product.interfaces";
import { fetchProductsByCategory } from "@/utils/api/apiRequests";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    currentProducts: [] as IProducts[],
    filteredProducts: [] as IProducts[],
    isLoading: false,
  }),
  actions: {
    async updateContentOnPage(category: string) {
      this.isLoading = true;
      this.currentProducts = await fetchProductsByCategory(category);
      this.filteredProducts = this.currentProducts;
      this.isLoading = false;
    },
  },
});
