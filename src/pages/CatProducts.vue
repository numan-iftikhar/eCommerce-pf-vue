<template>
  <img v-if="loading" class='mx-auto block' src="../assets/images/spinner.gif" alt="spinner" />
  <div v-else-if="catProducts.length <= 0" class="my-10 text-center text-3xl text-gray-500">No products found!</div>
  <div v-else class="row justify-content-center" style="width: 80%; margin: 5rem auto">
    <div v-for="product in catProducts" :key="product.id" class="col-md-4">
      <div
        style="
          box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
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
export default {
  data() {
    return {
      type: this.$route.params.cat,
      catProducts: [], // to be filled with api data
      loading: false,
    };
  },

  // api call to get products of specific category
  mounted() {
    this.loading=true;
    fetch(`https://dummyjson.com/products/category/${this.type}`)
      .then((res) => res.json())
      .then((data) => {this.catProducts = data.products
      this.loading = false;});
  },
};
</script>
