export const homeRoutes = [
    {
        path: '/',
        name: 'Home',
        component: require('@/views/home/index.vue').default, // 用import会报错，home.vue.ts is not a module
        meta: {
            permission: true,
        },
    },
];
