import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/discounts',
        name: 'discounts',
        component: () => import('../components/ListDiscounts.vue'),
    },
    {
        path: '/add',
        name: 'discounts-add',
        component: () => import('../components/AddDiscount.vue'),
    },
    {
        path: '/:id_producto/:id_descuento',
        name: 'discounts-modify',
        component: () => import('../components/ModifyDiscount.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;