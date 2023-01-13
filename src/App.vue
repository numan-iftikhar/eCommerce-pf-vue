<template>
  <Navbar />
  <router-view />
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
  /* background: rgb(235, 235, 235); */
}
a {
  text-decoration: none;
}
</style>
