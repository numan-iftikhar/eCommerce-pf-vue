<template>
  <div class="row justify-content-center">
    <div v-for="product in products" :key="product.id" class="col-md-4">
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
      products: [], // to be filled with api data
    };
  },
  methods: {
    getAllProducts() {
      fetch("https://dummyjson.com/products?limit=9")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.products = data.products;
        });
    },
  },

  created() {
    this.getAllProducts();
  },
};
</script>
