<template>
  <img
    v-if="loading"
    class="mx-auto block"
    src="../assets/images/spinner.gif"
    alt="spinner"
  />
  <div class="antialiased bg-gray-100">
    <div class="py-6">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              <img
                :src="productDetails.thumbnail"
                class="h-full w-full object-fill rounded-lg"
              />
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2
              class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
            >
              {{ productDetails.title }}
            </h2>
            <p class="text-gray-500 text-sm">
              By
              <span href="#" class="text-indigo-600 hover:underline">{{
                productDetails.brand
              }}</span>
            </p>

            <div class="flex items-center space-x-4 my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span class="text-indigo-400 mr-1 mt-1">$</span>
                  <span class="font-bold text-indigo-600 text-3xl">{{
                    productDetails.price
                  }}</span>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-green-500 text-xl font-semibold">
                  Save {{ productDetails.discountPercentage }}%
                </p>
                <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>

            <p class="text-gray-500">
              {{ productDetails.description }}
            </p>

            <div class="flex py-4 space-x-4">
              <div class="relative">
                <div
                  class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold"
                >
                  Qty
                </div>
                <div
                  class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-2 h-14 flex items-end pb-1"
                >
                  <input
                    type="number"
                    v-model="qty"
                    class="border-none outline-none w-10 text-center"
                    min="1"
                  />
                </div>
              </div>

              <button
                type="button"
                @click="addToCart"
                class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleProduct } from "@/services/service";
export default {
  data() {
    return {
      productID: this.$route.params.id,
      productDetails: {}, // to be filled with api data of product details
      loading: false,
      qty: null,
    };
  },

  methods: {
    addToCart() {
      // dispatch action
      this.$store.dispatch("addProductToCart", [this.productDetails, this.qty]);
    },
  },
  mounted() {
    this.loading = true;
    getSingleProduct(this.productID).then((data) => {
      this.productDetails = data;
      this.loading = false;
    });
  },
};
</script>
