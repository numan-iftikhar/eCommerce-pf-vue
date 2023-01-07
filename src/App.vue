<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script>
/*
 - TODO: Add logout, sign up, login etc
 - TODO: Code `add to cart` functionality
 - Todo: Change single product page
*/
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
  background: rgb(235, 235, 235);
}
a {
  text-decoration: none;
}
</style>
