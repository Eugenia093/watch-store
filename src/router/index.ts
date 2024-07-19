import { createRouter, createWebHistory } from 'vue-router';


// Importam vederile
import HomeView from '../views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import Dashboard from '@/views/Dashboard.vue';
import LoginView from '@/views/LoginView.vue';
import { isAuthenticated } from '@/auth/auth';


const routes = [
    {
        path: '/home',
        component: HomeView,
        name: 'Home'
    },
    {
        path:'/product/:id',
        component: ProductView,
        name: 'Product'
    },
    {
        path:'/login',
        component: LoginView,
        name: 'Login'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        meta: {
            requireAuth: true
        }
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


// Naviagation guard care verifica autentificarea

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated ) {
        next({ name: 'Login'})
    }
    else {
        next();
    }
})


export default router;