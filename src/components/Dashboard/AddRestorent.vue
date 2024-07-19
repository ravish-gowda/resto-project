<template >
    <Header></Header>
    <div class="add">
       <h1>Add Restaurant</h1> 
       <form >
        <input type="text" placeholder="Enter Restorent Name" name="name" v-model="restaurant.name"/>
        <input type="text" placeholder="Enter Address" name="Address" v-model="restaurant.address"/>
        <input type="text" placeholder="Enter Cotact" name="contact" v-model="restaurant.contact"/>
        <button @click="addRestorent" type="button" >Add New Restaurant</button>
       </form>
    </div>
</template>
<script>

import Header from '../Header.vue';
import axios from 'axios';
export default {
    name:"Add-Resto",
    components:{
        Header,
    },
    data(){
       return{
        restaurant:{
            name:'',
            address:'',
            contact:''
        }
       }
    },
   
    methods:{
        async addRestorent(){
          let result =await axios.post("http://localhost:3000/resturant",{
            name:this.restaurant.name,
           Address:this.restaurant.address,
           contact:this.restaurant.contact
          });
          //console.warn(result);
          if(result.status==201){
            alert("New Restorent Added")
           
          }
         
        }
    },
   

}
</script>
<style >
    
</style>