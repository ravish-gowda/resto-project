<template>
<router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
 
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
 
}
.logo{
        width: 100px;
    }
    .login input,.register input,.add input{
    width: 300px;
    height: 30px;
    padding-left: 20px;
    margin-bottom: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    border: 1px solid skyblue;
    }
    .login button,.register button,.add button{
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background: skyblue;
    cursor: pointer;
    border-radius: 10px;
    }
    .log-test{
        text-decoration: none;
    }
    /*body{
      background: url("./assets/image.png");
      width: 100%;
      align-items: center;
      background-size: cover;
    }*/
</style>
