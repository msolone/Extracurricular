<template>
  <div id="app">
      <Nav :team="team"/>
      <router-view 
        :auth="auth" 
        :authenticated="authenticated" 
        :team="team">
      </router-view>
    <footer class="footer">
    </footer>
  </div>
</template>

<script>
import AuthService from "./Auth/AuthServices.js";
import Nav from "./components/Nav.vue";
const auth = new AuthService();
const { login, logout, authenticated, authNotifier } = auth;
export default {
  components: {
    Nav
  },
  data: function() {
    authNotifier.on("authChange", authState => {
      this.authenticated = authState.authenticated;
    });
    return {
      auth,
      authenticated,
      footerOff: false,

      team: {
        id: 0,
        name: '',
        update: function(teamId, teamName) {
      console.log("updating selected team", { id: teamId , name: teamName});
          this.id = teamId;
          this.name = teamName
        }
      },
      user: {
        given_name: "",
        family_name: ""
      }
    };
  },
  mounted: function() {
    this.auth.getProfile((err, user) => {
      console.log({ err, user });
      this.user = user;
    });
  },
  methods: {
    login,
    logout,
    
    
  }
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
body {
  height: 100%;
}

html {
  height: 100%;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  background: #103072;
  color: white;
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5em;
  min-height: 3.5em;

}
.header_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header h1 {
  font-size: 2em;
}
.header h3 {
  font-size: 1.5em;
}
.logo {
  display: flex;
  align-items: center;
  padding-left: 2em;
  padding-top: 0.5em;
  color: white;
}

.header img {
  height: 1.5em;
  width: 2em;
}

.dropdown {
  padding-right: 2em;
  background: #103072;
}

.btn-secondary {
  color: #fff;
  background: #103072;
  border-color: #103072;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #103072;
  border-color: #545b62;
}
.show > .btn-secondary.dropdown-toggle {
  background: #103072;
}
.dropdown-toggle::after {
  content: none;
}
.dropdown-menu {
  left: 15px;
}
.dropdown-menu-header {
  width: 7.5em;
  margin: 0.125rem -3em;
  min-width: 8.5em;
  left: -15px!;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  margin-top: 0.5em;
  background: #103072;
  color: white;
  font-size: 1em;
  height: 7.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer_off {
  display: none;
}
</style>
