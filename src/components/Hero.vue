<template>
  <div class="hero">
    <div class="hero-text">
      <p>Top fashion for men</p>
      <h1>Best fashion for men</h1>
      <router-link to="/catalog"
        ><v-btn
          style="color: white"
          color="rgb(256, 114, 182)"
          elevation="2"
          large
          >Learn More</v-btn
        ></router-link
      >
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url(../assets/images/slide1.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 80vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.hero-text p {
  font-size: 1.5rem;
  text-transform: capitalize;
}
.hero-text h1 {
  font-size: 4rem;
  text-transform: capitalize;
}
.hero-text a {
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 1rem 1rem;
  color: white;
  text-decoration: none;
  display: inline-block;
}
</style>
