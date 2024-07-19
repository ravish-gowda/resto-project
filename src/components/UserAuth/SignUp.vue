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
          console.warn(result);
          if(result.status==201){
            alert("Sign Up Done")
          }
          localStorage.setItem("user-info",JSON.stringify(result.data))
        }
    }
}
</script>
<style scoped>
    .logo{
        width: 100px;
    }
    .register input{
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
    .register button{
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background: skyblue;
    cursor: pointer;
    border-radius: 10px;
    }
</style>