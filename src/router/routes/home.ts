export const homeRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            permission: true,
        },
    },
];
