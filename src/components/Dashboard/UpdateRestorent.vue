<template >
    <Header></Header>
    <div class="update">
        <h2>Update Restaurant</h2>
        <form >
        <input type="text" placeholder="Enter Restorent Name" name="name" v-model="restaurant.name"/>
        <input type="text" placeholder="Enter Address" name="Address" v-model="restaurant.Address"/>
        <input type="text" placeholder="Enter Cotact" name="contact" v-model="restaurant.contact"/>
        <button @click="updateRestorent" type="button" >Update Restaurant</button>
       </form>
    </div>
</template>
<script>
import axios from 'axios';
import Header from '../Header.vue';
import SignUp from '../UserAuth/SignUp.vue';

export default {
    name:'Update-Resto',
    components:{
        Header,
    },
    data(){
       return{
        restaurant:{
            name:'',
            Address:'',
            contact:''
        }
       }
    },
    methods:{
       async updateRestorent(){
           //console.warn("updated",this.restaurant)
           let result =await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
            name:this.restaurant.name,
           Address:this.restaurant.Address,
           contact:this.restaurant.contact
          });
          //console.warn(result);
          if(result.status==200){
            alert("Updated Restorent ")
            this.$router.push({name:'Home'})
           
          }
        }
    },
    async mounted()
    {
        let user=localStorage.getItem('user-info');
        if(!user)
    {
        this.$router.push({name:SignUp})
    }
    const result=await axios.get("http://localhost:3000/resturant/"+this.$route.params.id);
    //console.warn(result)
    this.restaurant=result.data
    }
}
</script>
<style>
    
</style>