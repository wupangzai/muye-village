export const homeRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue'), // 用import会报错，home.vue.ts is not a module
        meta: {
            permission: true,
        },
    },
];
