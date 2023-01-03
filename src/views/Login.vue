<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
    <div
      class="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white"
    >
      <h2 class="text-center mb-4 text-primary">Login Form</h2>
      <form @submit.prevent="validateUser">
        <div class="mb-3">
          <label for="username" class="form-label">username</label>
          <input
            v-model="username"
            type="text"
            class="form-control border border-primary"
            id="username"
            aria-describedby="userHelp"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control border border-primary"
            id="password"
          />
        </div>
        <div class="d-grid">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async validateUser() {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          // expiresInMins: 60
        }),
      });
      const data = await res.json();
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("username", JSON.stringify(data.username));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("firstName", JSON.stringify(data.firstName));
      localStorage.setItem("lastName", JSON.stringify(data.lastName));
      console.log(data);
      if (data.message != "Invalid credentials")
        this.$router.replace({ path: "/" });
    },
  },
};
</script>
