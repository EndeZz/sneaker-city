import { IProducts } from "@/models/product.interfaces";
import { fetchProductsByCategory } from "@/utils/api/apiRequests";
import { ref } from "vue";

export const useContentOnPage = () => {
  const currentProducts = ref<IProducts[]>([]);
  const filteredProducts = ref<IProducts[]>([]);
  const isLoading = ref<boolean>(true);

  const updateContentOnPage = async (category: string) => {
    isLoading.value = true;
    currentProducts.value = await fetchProductsByCategory(category);
    filteredProducts.value = [...currentProducts.value];
    isLoading.value = false;
  };

  return { updateContentOnPage, currentProducts, filteredProducts, isLoading };
};
