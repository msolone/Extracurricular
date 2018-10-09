<template>
  <div class="log_in">
    <button class="login_button" v-on:click="login" >Log - In</button>
 </div>
</template>

<script>
import AuthService from "../Auth/AuthServices.js";
const auth = new AuthService();
const { login, logout, authenticated, authNotifier } = auth;
export default {
  name: "LogIn",
  data() {
    authNotifier.on("authChange", authState => {
      this.authenticated = authState.authenticated;
    });
    return {
      auth,
      authenticated
    };
  },
  methods: {
    login,
    logout
  }
};
</script>

<style>
.log_in {
  background-image: url("../assets/logo.png");
  height: 100%;
  background-size: 100%;
  background-position: bottom;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.login_button {
  background: #103072;
  color: white;
  font-weight: bold;
  padding: 1em;
  border-radius: 10%;
  margin-top: 10em;
}
</style>

