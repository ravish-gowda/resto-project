<template>
<Header></Header>
<div>
    <h1>Hello {{name}}, Welcome to Home Page</h1>
    <table class="restaurant-table"  border="1px" >
        <tr>
            <td>ID</td>
            <td>Restorent Name</td>
            <td>Address</td>
            <td>Contact</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.Address }}</td>
            <td>{{ item.contact }}</td>
        </tr>
    </table>
</div>
</template>

<script>
import axios from 'axios';

import Header from '../Header.vue'
export default {
    name: "HomePage",
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        Header,
    },
    async mounted() {
        // console.warn("mounted")
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            });
        }
        let result = await axios.get("http://localhost:3000/resturant");
        //console.warn(result)
        this.restaurants = result.data;
    }
}
</script>

<style scoped>
h1 {
    text-align: left;
}

.restaurant-table {
  width: 80%;
  margin-left: 10%;
  border-collapse: collapse; /* Ensures table borders collapse into a single border */
  margin-bottom: 20px; /* Optional: Add margin for spacing */
}

.restaurant-table th,
.restaurant-table td {
  border: 1px solid #ccc; /* Border for cells */
  padding: 8px; /* Padding inside cells */
  text-align: left; /* Align text to the left within cells */
}

.restaurant-table th {
  background-color: #f2f2f2; /* Background color for header cells */
  color: #333; /* Text color for header cells */
}

.restaurant-table tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Alternate row background color */
}

.restaurant-table tbody tr:hover {
  background-color: #e0e0e0; /* Hover row background color */
}

</style>
