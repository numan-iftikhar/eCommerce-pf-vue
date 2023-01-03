<template>
  <section>
    <ul class="footer-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/catalog">Catalog</router-link>
      </li>
      <li>
        <router-link to="#">About</router-link>
      </li>
      <li>
        <router-link to="#">New</router-link>
      </li>
    </ul>

    <div class="copyright">copyright&copy;2023</div>
  </section>
</template>

<style>
.footer-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background: gray;
  padding: 2rem 0;
  margin-bottom: 0;
}
.copyright {
  background: rgb(34, 25, 25);
  text-align: center;
  padding: 1rem 0;
  color: white;
}
a {
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
}
</style>
