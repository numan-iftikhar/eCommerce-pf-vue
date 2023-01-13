<template>
  <span class="text-5xl text-gray-400 block font-bold text-center mt-10">
    Catalog
  </span>
  <img
    v-if="loading"
    class="mx-auto block"
    src="../assets/images/spinner.gif"
    alt="spinner"
  />
  <div v-else class="d-flex flex-wrap justify-center mx-5">
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
import { getAllCategories } from "@/services/service";
export default {
  data() {
    return {
      catalog: [], // will be filled with api data
      loading: false,
    };
  },
  methods: {
    getCategories() {
      this.loading = true;
      getAllCategories() // imported from service.js
        .then((data) => {
          this.catalog = data;
          this.loading = false;
        });
    },
  },

  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.wrapper {
  /* border: 1px solid #b08bbb; */
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 1rem;
  background: #f5f5dc;
  color: rgb(143, 143, 143);
  margin: 1rem;
  text-transform: uppercase;
  transition: all 0.3s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.wrapper:hover {
  background: rgb(244 114 182);
  color: #f5f5dc;
  border: 3px solid white;
}
.cat-title {
  color: inherit;
  transition: all 0.3s;
}
.cat-title:hover {
  scale: 1.1;
}
</style>
