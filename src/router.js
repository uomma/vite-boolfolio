import{createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import BlogPage from './pages/BlogPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: AppHome
        },
        {
            path:'/contacts',
            name:'contacts',
            component: AboutPage
        },
        {
            path:'/blog',
            name:'blog',
            component: BlogPage
        },
    ]
});

export {router};