<template>
  <Navbar />
  <router-view :key="$route.fullPath" />
  <Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}
#app {
  background: #fff;
}
a {
  text-decoration: none;
}
</style>
