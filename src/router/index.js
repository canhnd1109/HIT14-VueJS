import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue'),
            name: 'Home',
        },
        {
            path: '/register',
            component: () => import('../components/Register.vue'),
            name: 'Register',
        },
        {
            path: '/login',
            component: () => import('../components/Login.vue'),
            name: 'Login',
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.name === 'Login' && Cookies.get('access_token')) location.href = '/';

    if (!Cookies.get('access_token') && to.path !== '/login') next({ name: 'Login' });

    next();
});

export default router;
