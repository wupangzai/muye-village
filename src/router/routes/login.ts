export const loginRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            fullScreen: true,
        },
    },
];
