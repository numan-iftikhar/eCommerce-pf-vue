<template>
  <nav>
    <router-link to="/" class="logo">eCommerce</router-link>
    <div class="search_wrap search_wrap_3">
      <div class="search_box">
        <input type="text" class="input" placeholder="Search..." />
        <div class="btn btn_common">
          <!-- FIXME: Make search button work -->
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
    alpha() {
      this.$store.commit("UPDATE_CART");
      console.log(this.$store.state.cart);
    },
  },
  mounted() {
    console.log(this.$store.state);
  },
};
</script>
<style scoped>
.search_wrap {
  margin: 0 auto;
}

.search_wrap .search_box {
  position: relative;
  width: 35rem;
  height: 60px;
  overflow: hidden;
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
  font-size: 1.2rem;
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
  background: #764af1;
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
}
.logo {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
