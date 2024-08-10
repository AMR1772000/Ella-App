import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: [],
    watches: [],
    homeDecoration: [],
    productCategory: [],
    singleProduct: "",
    categories: [
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Tablets",
        route: "tablets",
      },
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Home Decoration",
        route: "home-decoration",
      },
      {
        title: "Watches",
        route: "mens-watches",
      },
      {
        title: "Mobile Accessories",
        route: "mobile-accessories",
      },
    ],
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/?limit=194"
        );
        // Filter products by category
        const filteredProducts = res.data.products.filter(
          (product) => product.category === "mobile-accessories"
        );
        const filteredNewProducts = res.data.products.filter(
          (product) => product.category === "laptops"
        );
        const excludedIds = new Set([
          121, 122, 125, 126, 127, 131, 132, 133, 134, 135, 136,
        ]);

        const filteredMobilePhones = res.data.products.filter(
          ({ category, id }) =>
            (category === "smartphones" || category === "tablets") &&
            !excludedIds.has(id)
        );
        const filteredWatches = res.data.products.filter(
          (product) =>
            product.category === "mens-watches" ||
            product.category === "womens-watches"
        );
        const filteredHomeDecoration = res.data.products.filter(
          (product) => product.category === "home-decoration"
        );
        // console.log(filteredProducts);
        // console.log(filteredNewProducts);
        // console.log(filteredMobilePhones);
        // console.log(filteredWatches);
        this.flashDeals = filteredProducts.slice(0, 8);
        this.newProducts = filteredNewProducts;
        this.mobilePhones = filteredMobilePhones.slice(0, 8);
        this.watches = filteredWatches.slice(0, 8);
        this.homeDecoration = filteredHomeDecoration;
      } catch (err) {
        console.error("Error Fetching Products:", err);
      }
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.productCategory = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          console.log(res.data);
          this.singleProduct = res.data;
        });
    },
  },
});
