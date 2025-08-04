// import Function
import { createRouter, createWebHistory } from "vue-router";

// import Layout
import DefaultLayout from "../layouts/DefaultLayout.vue";

// import Pages
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";

// import Data
import links from "../data/links";

const {navLinks,categoryLinks1,categoryLinks2,categoryLinks3, categoryLinks4} = links;

// create Routes
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', name: 'home', component: HomePage },
            { path: '/about', name: 'about', component: AboutPage }
        ],
        props: {
            navLinks,
            categoryLinks1,
            categoryLinks2,
            categoryLinks3,
            categoryLinks4
        }
    }
]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
