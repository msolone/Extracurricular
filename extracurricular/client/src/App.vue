<template>
  <div id="app">
    <header class="header">
      <hr>
      <section class="header_inner">
        
          <router-link class="logo" to="/home">
            <h1>E</h1>
            <h3>xtracurricular</h3>
          </router-link>
        
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
            type="button" id="dropdownMenu1" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
              <img src='./assets/white_triple_bar2.png' alt='logo'/>
          </button>
          <div class="dropdown-menu dropdown-menu-header" aria-labelledby="dropdownMenu1">
            <router-link to="/" class="dropdown-item">Log-In</router-link>
            <router-link to="/home" class="dropdown-item">Home</router-link>
            <router-link to="/home/take_attendance" class="dropdown-item">Attendance</router-link>
            <router-link to="/home/team_attendance_history/1" class="dropdown-item">History</router-link>
            <router-link to="/home/player_attendance_history/1" class="dropdown-item">Search</router-link>
          </div>
        </div>
      </section>
      <hr>

    </header>

    <router-view/>
    <footer class="footer">
      <p>Created by Michael Solone</p>
    </footer>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      footerOff: false
    };
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
  /* position: fixed;
  top: 0;
  width: 100%; */
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
  padding-left: 1em;
  padding-top: 0.5em;
  color: white;
}

.header img {
  height: 1.5em;
  width: 2em;
}

.dropdown {
  padding-right: 1em;
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

.dropdown-menu-header {
  width: 7.5em;
  margin: 0.125rem -3em;
  min-width: 3em;
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
