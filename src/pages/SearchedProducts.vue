<template>
  <img v-if="loading" class='mx-auto block' src="../assets/images/spinner.gif" alt="spinner" />
    <div v-else-if="searchedProducts.length <= 0" class="my-10 text-center text-3xl text-gray-500">No products found!</div>
  <div v-else class="row justify-content-center" style="width: 80%; margin: 5rem auto">
    <div v-for="product in searchedProducts" :key="product.id" class="col-md-4">
      <div
        style="
          box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
            rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
            rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            border-radius: 15px;
        "
        class="card my-3"
      >
        <div style="height: 15rem">
          <img
            :src="product.thumbnail"
            style="
              border-top-left-radius: 15px;
              border-top-right-radius: 15px;
              object-fit: contain;
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
          <div class="text-center pb-2 mb-1">
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
</template>
<script>
import { searchProducts } from "@/services/service"
export default {
  name: "SearchProducts",
  data() {
    return {
      searchedProducts: [], // to be filled with api data
      query: "", // will get query text from search bar that is being sent through $route.params
      loading: false,
    };
  },
  methods: {
    getSearchedProducts() {
      this.loading = true;
      searchProducts(this.query).then((data) => {
        this.searchedProducts = data.products
        this.loading = false;
      });
    },
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.query = this.$route.params.query;
        this.getSearchedProducts();
      },
      { immediate: true }
    );
  },
};
</script>
