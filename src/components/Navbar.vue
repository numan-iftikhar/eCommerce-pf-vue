<template>
  <nav>
    <router-link to="/" class="logo">Vuejs</router-link>
    <!-- <div class="search-wrapper">
      <input v-model="searchText" type="text" />
      <button @click="handleSearch" class="search-btn">>></button>
    </div> -->
    <div class="search_wrap search_wrap_3">
      <div class="search_box">
        <input type="text" class="input" placeholder="Search..." />
        <div class="btn btn_common">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/catalog">Catalog</router-link></li>
      <li>
        <router-link to="/login" class="login-btn"
          ><v-btn color="secondary" elevation="2">Login</v-btn></router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },

  methods: {
    handleSearch() {
      this.$router.push({
        name: "SearchedProducts",
        params: { query: this.searchText },
      });
    },
  },
};
</script>
<style scoped>
/* .search-wrapper {
  border: 1px solid white;
  border-radius: 5px;
  margin-left: auto;
}
.search-btn {
  background: lightskyblue;
  color: black;
  padding: 1px 5px;
  border-radius: 0 5px 5px 0;
  font-weight: bold;
  outline: none;
}
input[type="text"] {
  border: none;
  outline: none;
  background: white;
  padding: 1px 5px;
  border-radius: 5px 0 0 5px;
} */

.search_wrap {
  width: 500px;
  margin: 38px auto;
}

.search_wrap .search_box {
  position: relative;
  width: 500px;
  height: 60px;
}

.search_wrap .search_box .input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 18px;
}

.search_wrap .search_box .btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background: #7690da;
  z-index: 1;
  cursor: pointer;
}

.search_wrap .search_box .btn:hover {
  background: #708bd2;
}

.search_wrap .search_box .btn.btn_common .fas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
}
.search_wrap .search_box .input {
  padding-right: 80px;
  border-radius: 50px;
  background: white;
  outline: none;
}
.search_wrap .search_box .btn {
  right: 0px;
  border-radius: 50%;
}
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
  padding: 1rem 2rem;
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
