<template>
<Header></Header>
<div>
    <h1 class="animate">Hello {{name}}, Welcome to Restorent Management </h1>
    <table class="restaurant-table" border="1px">
        <tr>
            <td>ID</td>
            <td>Restorent Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.Address }}</td>
            <td>{{ item.contact }}</td>
            <td>
                <router-link :to="'/update/'+item.id"><button class="update">Update</button></router-link>
                <button @click="deleteResto(item.id)" class="del">Delete</button>
            </td>

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
    methods: {
        async deleteResto(id) {
            let result = await axios.delete("http://localhost:3000/resturant/" + id);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
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
    },
    mounted() {
        this.loadData()
    }
}
</script>

<style scoped>
h1 {
    text-align: left;
}

/* Example CSS animation */
.animate {
    animation: fadeIn 1s ease;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.restaurant-table {
    width: 80%;
    margin-left: 10%;
    border-collapse: collapse;
    /* Ensures table borders collapse into a single border */
    margin-bottom: 20px;
    /* Optional: Add margin for spacing */
}

.restaurant-table th,
.restaurant-table td {
    border: 1px solid #ccc;
    /* Border for cells */
    padding: 8px;
    /* Padding inside cells */
    text-align: center;
    /* Align text to the left within cells */
}

.restaurant-table th {
    background-color: #f2f2f2;
    /* Background color for header cells */
    color: #333;
    /* Text color for header cells */
}

.restaurant-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
    /* Alternate row background color */
}

.restaurant-table tbody tr:hover {
    background-color: #e0e0e0;
    /* Hover row background color */
}

.del {
    width: 60px;
    margin-bottom: 10px;
    padding: 5px;
    background-color: red;
    color: #f9f9f9;
    border: none;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

}

td .update {
    width: 60px;
    margin-bottom: 10px;

    padding: 5px;
    border: none;
    background-color: #42f2f5;
    border-radius: 5px;
}
</style>
