import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component:  () => import('@/pages/Main')
    },
    {
        path: '/posts',
        component: () => import('@/pages/PostPage')
    },
    {
        path: '/about',
        component: () => import('@/pages/About')
    },
    {
        path: '/posts/:id',
        component: () => import('@/pages/PostIdPage')
    },
    {
        path: '/store',
        component: () => import('@/pages/PostPageWithStore')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;