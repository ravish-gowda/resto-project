<template>
    <div>
      <!-- Logo and Title -->
      <img src="../../assets/restorent-logo.png" alt="Restaurant Logo" class="logo">
      <h1>Login</h1>
    </div>
    <div class="login">
      <!-- Login Form -->
      <label>Enter Email</label>
      <input type="text" placeholder="Enter Email" v-model="email"/><br>
      <label>Enter Password</label>
      <input type="password" placeholder="Enter Password" v-model="password"/><br>
      <button class="btn" @click="login">Sign In</button>
      <h5>
        Didn't have Account : 
        <router-link to="/signup" class="log-test">Sign Up</router-link>
      </h5>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.get(`http://localhost:3000/users`, {
            params: {
              email: this.email
            }
          });
  
          // Check if response contains any users with the given email
          const users = response.data;
          if (users.length === 0) {
            // No user found with the specified email
            alert('Invalid user ID');
            return;
          }
  
          // Check if any user has the correct password
          const user = users.find(u => u.password === this.password);
          if (!user) {
            // No user found with matching email and password
            alert('Password is wrong');
            return;
          }
  
          // Authentication successful
        
          
          if(response.status==200 && response.data.length>0){
            console.warn("Login successful")
            alert('Login successful');
            localStorage.setItem("user-info",JSON.stringify(response.data[0]))
            this.$router.push({name:'Home'})
          }

        } catch (error) {
          console.error('Login failed:', error);
          alert('Login failed, please try again later');
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
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  