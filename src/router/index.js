// import Function
import { createRouter, createWebHistory } from "vue-router";

// import Layout
import DefaultLayout from "../layouts/DefaultLayout.vue";

// import Pages
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

// create Routes
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', name: 'home', component: Home },
            { path: '/about', name: 'about', component: About }
        ]
    }
]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
