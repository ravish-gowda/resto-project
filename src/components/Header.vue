<template >
       <div class="main-header">
        <div class="left-content">
           <h3>Restaurant Management App</h3>
        </div>
        <div class="header">
        <router-link to="/home">Home</router-link>
        <router-link to="/add" >Add Restaurant</router-link>
        <router-link to="/update" >Update Restaurant</router-link>
        <a href="#" @click="logout">Logout</a>
        </div>
       
    </div>
</template>
<script>
export default {
    name:"HeaderPage",
    methods:{
        logout(){
           // console.warn("logout")
           localStorage.clear();
           this.$router.push({name:'SignIn'})
        }
    }
}
</script>
<style >
body{
    padding:0;
    margin: 0;
}
    .main-header{
    display: flex;
   /* background-color: rgb(76, 41, 2);*/
   background: #17ded4cf;
   
    overflow: hidden;
    justify-content: space-between; /* Distribute items along the main axis (horizontally) */
    align-items: center; /* Center items vertically */
     padding: 10px; 
    }
    .header a{
    display: flex;
    flex-direction: column;
    color: rgb(26, 2, 2);
    float: left;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 16px;
 
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
   
    }

    .header a:hover{

        background: #ddd;
        color: #222;
        border-radius: 2px;
    }
   

.left-content {
    color: aliceblue;
    font-family:  sans-serif;
  display: flex; /* Nested flex container */
  align-items: center; /* Center items vertically within left content */
}
</style>