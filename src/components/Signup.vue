<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="text" placeholder="username" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Register</button>
    <p>Do you have an account?</p>
    <router-link to="/signin">Sign in now!</router-link>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>