import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/?limit=100"
        );
        console.log(res.data.products);
        // Filter products by category
        const filteredProducts = res.data.products.filter(
          (product) =>
            product.category === "laptops" ||
            product.category === "mens-watches"
        );
        console.log(filteredProducts);
        this.flashDeals = filteredProducts.slice(0, 8);
      } catch (err) {
        console.error("Error Fetching Products:", err);
      }
    },
  },
});
