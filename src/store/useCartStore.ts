import { IProduct } from "@/models/product.interfaces";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { defineStore } from "pinia";

export interface ICart {
  product: IProduct;
  count: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: getLocalStorage("cart") as ICart[],
  }),
  actions: {
    addToCart(newProduct: ICart) {
      const currentProduct = this.cart.find(
        ({ product }) => product.id === newProduct.product.id
      );

      if (currentProduct) {
        currentProduct.count += newProduct.count;
      } else {
        this.cart.push(newProduct);
      }

      setLocalStorage<ICart[]>("cart", this.cart);
    },
    updateAmount(id: number, value: number) {
      this.cart = this.cart
        .map(({ product, ...cartProduct }) => {
          if (product.id === id) {
            cartProduct.count = value;
          }
          if (cartProduct.count === 0) {
            return null;
          }

          return { ...cartProduct, product };
        })
        .filter((item) => item !== null) as ICart[];
    },
    clearCart() {
      this.cart = [] as ICart[];
      setLocalStorage<ICart[]>("cart", this.cart);
    },
  },
});
