import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({

    history : createWebHistory(),
    routes  : [
        {
            path: '/',
            name: 'home',
            component :() => import ('../pages/index.vue' ),
        },
        {
            path: '/about',
            name: 'about',
            component : () => import ('../pages/About.vue'),
        },
    ]
})
