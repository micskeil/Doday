<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald|Quattrocento");

#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #181e34;
  background-color: rgb(245, 245, 245);
  height: 100vh;
}

#nav {
  padding: 10px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #404e88;
}

.rounded {
  border-radius: 20px !important;
}
</style>
