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

  <section class="related-products">
    <span class="text-5xl text-gray-400 font-bold block text-center my-5">
      Related Products
    </span>
    <div class="row justify-content-center sm:px-5 md:px-10 md:mb-10">
    <div v-for="(product) in relatedProducts" :key="product.id" class="col-md-4" >
      <div class="card my-3 drop-shadow-2xl">
        <div style="height: 15rem">
          <img
            :src="product.thumbnail"
            style="
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
              object-fit: fill;
            "
            class="img-fluid h-100 w-100"
            :alt="title"
          />
        </div>
        <div class="card-body pb-0">
          <div class="d-flex justify-content-between">
            <div>
              <p>
                <h5 class="text-dark">{{ product.title }}</h5>
              </p>

              <p>
                <span class="text-dark">${{ product.price }}</span>
              </p>
            </div>
            <div>
              <p class="small text-muted">Rated {{ product.rating }}/5</p>
              <p class="small text-muted">{{ product.category }}</p>
            </div>
          </div>
        </div>

        <hr class="my-0" />
        <div class="card-body">
          <div class="text-center pb-2">
            <router-link
              :to="{ name: 'SingleProduct', params: { id: product.id } }"
              type="button"
              class="py-1 px-3 rounded-md bg-[#764af1] text-white shadow-xl hover:scale-110 transition-all"
              >Get Info</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { getRelatedProducts, getSingleProduct } from "@/services/service";
export default {
  data() {
    return {
      productID: this.$route.params.id,
      productDetails: {}, // to be filled with api data of product details
      relatedProducts: [], // to be filled with api data of related products
      loading: false,
      qty: null,
    };
  },

  methods: {
    addToCart() {
      if(isNaN(this.qty) || this.qty < 1) this.qty = 1;
      // dispatch action
      this.$store.dispatch("addProductToCart", [this.productDetails, this.qty]);
    },
  },
  mounted() {
    this.loading = true;
    getSingleProduct(this.productID).then((data) => {
      this.productDetails = data;
      // this function is coming from service.js
      getRelatedProducts(this.productDetails.category)
      .then(data => this.relatedProducts = data.products);
      this.loading = false;
    });

  },
};
</script>
