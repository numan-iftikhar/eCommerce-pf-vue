<template>
  <Hero />
  <div class="product-cards my-10">
    <span class="text-5xl text-gray-400 font-bold block text-center">
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
