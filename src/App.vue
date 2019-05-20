<template>
  <div id="app">
    <!--<img src="assets/head.png"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    /*background-size: 100% 100%;
    background: url("./assets/head.jpg") no-repeat;
    width:100%;
    heihgt:100%;*/
  }
</style>
