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
        ],
        props: {
            navLinks: [
                { id: 1, text: "CHARACTERS", url: "#", current: false },
                { id: 2, text: "COMICS", url: "#", current: false },
                { id: 3, text: "MOVIES", url: "#", current: true },
                { id: 4, text: "TV", url: "#", current: false },
                { id: 5, text: "GAMES", url: "#", current: false },
                { id: 6, text: "COLLECTIBLES", url: "#", current: true },
                { id: 7, text: "VIDEOS", url: "#", current: false },
                { id: 8, text: "FANS", url: "#", current: true },
                { id: 9, text: "NEWS", url: "#", current: false },
                { id: 10, text: "SHOP", url: "#", current: true }
            ]
        }
    }
]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
