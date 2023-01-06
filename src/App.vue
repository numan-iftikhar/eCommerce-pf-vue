<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script>
/*
 - TODO: Add dropdown for login and logout
 - TODO: Add counter on cart icon
 - TODO: Add loader on all pages
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
/* .btn-primary:hover {
  box-shadow: 0 0 10px 5px rgb(193, 194, 255);
} */
</style>
