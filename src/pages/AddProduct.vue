<template>
  <span class="text-5xl text-gray-400 font-bold block text-center my-5">
    Add Product
  </span>
  <form class="container mx-auto w-96 my-10 shadow-lg p-4 rounded-lg">
    <div class="mb-6">
      <label
        for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Product Title</label
      >
      <input
        v-model="title"
        type="text"
        id="title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="iPhone 14 pro max"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="brand"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Brand</label
      >
      <input
        v-model="brand"
        type="text"
        id="brand"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Apple"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="price"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Price</label
      >
      <input
        v-model="price"
        type="number"
        id="price"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <button
      @click.prevent="addProduct"
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add Product
    </button>
  </form>
</template>

<script>
import { addNewProduct } from "@/services/service";

export default {
  data() {
    return {
      title: "",
      brand: "",
      price: null,
    };
  },
  methods: {
    addProduct() {
      addNewProduct(this.title, this.brand, this.price).then((data) =>
        alert(`${data.title} has successfully been added! :)`)
      );
    },
  },
};
</script>
