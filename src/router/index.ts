import Vue from 'vue';
import Router, { Route } from 'vue-router';
import { routes } from './routes';

Vue.use(Router);

const router = new Router({
    routes,
});

router.beforeEach((to, from, next) => {
    // 不需要权限的路由直接放行
    if (!to.meta?.permission) {
        next();
        return;
    }
    next();
});

export default router;
