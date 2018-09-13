<template>
  <div id="app">
    <header class="header">
      <section class="logo">
        <h1>E</h1>
        <h3>xtracurricular</h3>
      </section>
      
    </header>
    <div id="nav">
      <router-link to="/">Log-In</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view/>
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
}

.header {

  background: #103072;
  color: white;
  height: 20%;
}
.logo {
  display: flex;
  align-items: center;
  padding-left: 3em;
  padding-bottom: 4em;

}
.header h1 {
  font-size: 4em;
}
.header h3 {
  font-size: 2em;
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
</style>
