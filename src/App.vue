<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="https://img.icons8.com/windows/32/000000/home.png"></router-link> |
      <router-link to="/register">register</router-link> |
      <router-link to="/connect">connect</router-link> |
      <router-link to="/Todolist">To do list</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
