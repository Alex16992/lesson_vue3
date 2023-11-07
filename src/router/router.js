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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;