<template>
  <div class="row justify-content-center" style="width: 80%; margin: 5rem auto">
    <div v-for="product in searchedProducts" :key="product.id" class="col-md-4">
      <div class="card my-3" style="border-radius: 15px">
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
                <a href="#!" class="text-dark">{{ product.title }}</a>
              </p>

              <p>
                <a href="#!" class="text-dark">${{ product.price }}</a>
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
              class="btn btn-primary"
              >View Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchProducts",
  data() {
    return {
      searchedProducts: [],
      query: "",
    };
  },
  methods: {
    getSearchedProducts() {
      fetch(`https://dummyjson.com/products/search?q=${this.query}`)
        .then((res) => res.json())
        .then((data) => (this.searchedProducts = data.products));
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
