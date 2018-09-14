<template>
  <div id="app">
    <header class="header">
      <hr>
      <section class="header_inner">
        <section class="logo">
          <h1>E</h1>
          <h3>xtracurricular</h3>
        </section>
        <img src='./assets/white_triple_bar2.png' alt='logo'/>
      </section>
      <hr>
   
      
    </header>
    <div id="nav">
      <router-link to="/">Log-In</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view/>
    <footer class="footer">

    </footer>
  </div>
</template>

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
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header_inner {
  display: flex;
  align-items: center;
  padding-left: 2em;
  justify-content: space-between;
}
.header h1 {
  font-size: 4em;
}
.header h3 {
  font-size: 2em;
}
.logo {
  display: flex;
  align-items: center;
}

.header img {
  height: 4em;
  width: 4em;
  padding-right: 2em;
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
  background: #103072;
  height: 7.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
