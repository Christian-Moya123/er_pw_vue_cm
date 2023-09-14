<template>
  <nav>
    <router-link to="/">Crear nuevo Profesor</router-link>
    <router-link to="/todos">Consultar Profesores</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  background: rgb(208, 202, 202);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  background: rgb(120, 120, 184);
  color: white;
}
</style>
