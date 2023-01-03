<template>
  <nav>
    <router-link to="/" class="logo">Vuejs</router-link>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/catalog">Catalog</router-link></li>
      <li><router-link to="/product">Product</router-link></li>
      <li>
        <router-link to="/login" class="login-btn"
          ><v-btn color="secondary" elevation="2">Login</v-btn></router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-links {
  display: flex;
  list-style: none;
  align-items: center;
  margin: auto 0;
}

.nav-links > * {
  margin-left: 2rem;
  font-size: 0.9rem;
}
a,
.login-btn {
  color: #fff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
nav {
  background: #000080;
  padding: 5px 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
