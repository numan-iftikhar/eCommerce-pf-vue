<template>
  <Hero />

  <div class="product-cards">
    <h2>Latest Products</h2>
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
h2 {
  font-size: 1.5rem;
  text-align: center;
}
.product-cards {
  padding: 3rem 5rem;
  gap: 1rem;
  overflow-x: auto;
}
</style>
