<template>
  <Hero />
  <div class="product-cards">
    <span
      class="display-6 text-muted d-inline-block mb-5 border-bottom border-5 text-3xl text-rose-500"
    >
      Latest Products
    </span>
    <ProductCard />
  </div>
</template>
<script>
import Hero from "../components/Hero.vue";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    Hero,
    ProductCard,
  },
};
</script>

<style scoped>
.product-cards {
  padding: 3rem 5rem;
  gap: 1rem;
  overflow-x: auto;
  background-color: #eee;
}
</style>
