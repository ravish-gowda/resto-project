import Home from "./components/Dashboard/Home.vue";
import SignUp from "./components/UserAuth/SignUp.vue";
import SignIn from "./components/UserAuth/SignIn.vue";
import Add from"./components/Dashboard/AddRestorent.vue"
import Update from "./components/Dashboard/UpdateRestorent.vue"
import { createRouter,createWebHistory } from "vue-router";

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/home'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'SignIn',
        component:SignIn,
        path:'/'
    },
    {
        name:'Add-Resto',
        component:Add,
        path:'/add'
    },
    {
        name:'Update-Resto',
        component:Update,
        path:'/update/:id'
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;