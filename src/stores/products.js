import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/?limit=194"
        );
        console.log(res.data.products);
        // Filter products by category
        const filteredProducts = res.data.products.filter(
          (product) =>
            product.category === "tablets" ||
            product.category === "mobile-accessories"
        );
        const filteredNewProducts = res.data.products.filter(
          (product) => product.category === "laptops"
        );
        console.log(filteredProducts);
        console.log(filteredNewProducts);
        this.flashDeals = filteredProducts.slice(0, 8);
        this.newProducts = filteredNewProducts;
      } catch (err) {
        console.error("Error Fetching Products:", err);
      }
    },
  },
});
