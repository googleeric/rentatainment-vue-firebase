<template>
  <router-view/>
</template>

<style>
body{
  background-color:#EEF2F1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
.top-text{
    background: #2196f3;
    color: white;
    padding: 0.8rem;
    font-size: 18px;
    text-align: center;
}
</style>
