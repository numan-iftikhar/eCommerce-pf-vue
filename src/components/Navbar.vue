<template>
  <nav>
    <router-link to="/" class="logo"
      ><span class="logo-slash">/</span> Shopie
      <span class="logo-slash">/</span></router-link
    >
    <div class="search_wrap">
      <div class="search_box">
        <input
          v-model="searchText"
          type="text"
          class="input"
          placeholder="Search..."
        />
        <div @click="handleSearch" class="btn btn_common">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
    <ul class="nav-links space-x-2 md:space-x-8">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/catalog">Catalog</router-link></li>
      <li><router-link to="/add-product">Add Product</router-link></li>

      <!-- cart component -->
      <li><CartPage /></li>
      <li>
        <router-link to="/login" class="login-btn"
          ><v-btn class="text-white" color="rgb(256, 114, 182)" elevation="2"
            >Login</v-btn
          ></router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import CartPage from "../pages/CartPage.vue";
export default {
  components: { CartPage },
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
nav {
  position: sticky; /* will take position in DOM */
  top: 0;
  z-index: 1;
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
  transition: all 0.3s;
}
.logo:hover {
  color: pink;
}
.logo-slash {
  color: pink;
  font-weight: 900;
  font-size: 1.5rem;
}
.search_wrap {
  width: 34%;
}
.search_wrap .search_box {
  margin: 0 auto;
  position: relative;
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
  padding-right: 80px;
  border-radius: 50px;
  background: white;
  outline: none;
  color: gray;
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
  right: 0px;
  border-radius: 50%;
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
.nav-links {
  display: flex;
  list-style: none;
  align-items: center;
  margin: auto 0;
}

.nav-links > * {
  font-size: 1.2rem;
}
.nav-links a:hover {
  color: pink;
}
@media screen and (max-width: 1000px) {
  .search_wrap {
    width: 20%;
  }
}
@media screen and (max-width: 870px) {
  .search_wrap {
    display: none;
  }
}
@media screen and (max-width: 690px) {
  nav {
    padding: 10px 10px;
  }
  .nav-links > * {
    font-size: small;
  }
  li:nth-child(1) {
    display: none;
  }
  .logo,
  .logo-slash {
    font-size: small;
  }
  .login-btn {
    display: none;
  }
}
</style>
