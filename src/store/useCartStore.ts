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
    removeFromCart(id: number) {
      this.cart = this.cart.filter(({ product }) => product.id !== id);
      setLocalStorage<ICart[]>("cart", this.cart);
    },
    updateAmount(id: number, value: number) {
      const currentIndex = this.cart.findIndex(
        ({ product }) => product.id === id
      );
      this.cart[currentIndex].count = value;

      if (this.cart[currentIndex].count === 0)
        this.removeFromCart(this.cart[currentIndex].product.id);

      setLocalStorage<ICart[]>("cart", this.cart);
    },
    clearCart() {
      this.cart = [] as ICart[];
      setLocalStorage<ICart[]>("cart", this.cart);
    },
  },
});
