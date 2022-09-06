import axios from "axios";
import { ref } from "vue";

export const useFetchCategories = () => {
  const categories = ref<string[]>([]);

  const fetchCategories = async () => {
    const resp = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    const data = resp.data;
    categories.value = data;
  };

  return { categories, fetchCategories };
};
