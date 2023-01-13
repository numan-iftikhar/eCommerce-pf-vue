<template>
  <Hero />
  <div class="product-cards">
    <span class="text-5xl text-gray-400 font-bold block text-center mb-5">
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
