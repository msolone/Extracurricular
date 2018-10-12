<template>

  <div class="log_in">
    <div class="title_logo">
      <h1>Extracurricular</h1>
      <button class="login_button" v-on:click="login" >Log - In</button>
    </div>
      <p>Where time is everything</p>
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

<style scoped>
.log_in {
  background: #103072;
  background-size: 100%;
  height: 70%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_button {
  background: #103072;
  color: white;
  font-weight: bold;
  padding: 1em;
  border-radius: 10%;
  margin-left: 1em;
}

h1 {
  color: white;
  font-weight: bolder;
}

p {
  font-size: 1.2em;
  color: white;
  margin: 2em 0 0 0em;
  font-style: italic;

}

@media (max-width: 760px) {
  .title_logo {

  flex-direction: column;
  }
}
</style>

