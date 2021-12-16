import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import NotFound from '@/views/NotFound.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: { title: 'Accueil' }
    },
    {
        name: 'About',
        path: '/about',
        component: About,
        meta: { title: 'A propos' }

    },
    {
        name: 'Product',
        path: '/product/:name',
        component: Product,
        props: true,
        meta: { title: 'Produit' }

    },
    {
        name: "NotFound",
        path: '/:pathMath(.*)',
        component: NotFound,
        meta: { title: "404 Not Found" }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to, from) => {
    console.log(from, to);
    document.title = from.meta.title;
})

export default router;