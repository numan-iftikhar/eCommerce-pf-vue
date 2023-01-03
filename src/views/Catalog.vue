<template>
  <h2 class="display-3 text-center mt-5">Catalog</h2>
  <div class="d-flex flex-wrap justify-center mx-5">
    <!-- Tech section -->
    <section v-for="category in catalog" :key="category" class="my-5">
      <div class="wrapper">
        <router-link
          :to="{ name: 'Catalog', params: { cat: category } }"
          class="cat-title"
        >
          {{ category }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalog: [], // will be filled with api data
    };
  },
  methods: {
    getCategories() {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) => (this.catalog = data));
    },
  },

  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.wrapper {
  border: 1px solid #b08bbb;
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 1rem;
  background: #f5f5dc;
  color: #b08bbb;
  margin: 1rem;
  text-transform: uppercase;
}
.cat-title {
  color: #b08bbb;
  transition: 0.5s;
}
.cat-title:hover {
  scale: 1.1;
}
</style>
