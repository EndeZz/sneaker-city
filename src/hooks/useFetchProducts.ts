import { IProducts } from "@/models/product.interfaces";
import axios from "axios";
import { ref } from "vue";

export const useFetchProducts = () => {
  const productItems = ref<IProducts[]>([]);

  const fetchProductsData = async () => {
    const resp = await axios.get<IProducts[]>(
      "https://fakestoreapi.com/products"
    );
    const data = resp.data;
    productItems.value = data;
  };

  return { productItems, fetchProductsData };
};
