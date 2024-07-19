<template >
    <div>
        <img src="../../assets/restorent-logo.png" alt="" class="logo">
        <h1>Register Form</h1>
    </div>
    <div class="register">
        <label >Enter Name</label>
        <input type="text"  placeholder="Enter Name" v-model="name"/><br>
        <label >Enter Email</label>
        <input type="text"  placeholder="Enter Email" v-model="email"/><br>
        <label >Enter Password</label>
        <input type="password" placeholder="Enter Password" v-model="password"/><br>
        <button class="btn" v-on:click="SignUp">Sign Up</button>
        <h5>
            Do you have Account  : 
            <router-link to="/signin" class="log-test">Login</router-link>
        </h5>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'SignUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async SignUp(){
          let result =await axios.post("http://localhost:3000/users",{
            name:this.name,
            email:this.email,
            password:this.password
          });
          //console.warn(result);
          if(result.status==201){
            alert("Sign Up Done")
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'Home'})
          }
         
        }
    },
    mounted(){
       // console.warn("mounted")
       let user=localStorage.getItem('user-info');
       if(user)
       {
        this.$router.push({name:'Home'});
       }
    }

}
</script>
<style scoped>
   
</style>