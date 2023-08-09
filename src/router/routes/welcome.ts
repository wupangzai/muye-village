export const welcomeRoutes = [
    {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/welcome/index.vue'),
        meta: {
            permissions: true,
        },
    },
    {
        path: '*',
        redirect: '/welcome',
    },
];
