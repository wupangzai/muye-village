import Vue from 'vue';

// 三方库
import '@/packages/elementui';
import '@/packages/axios';
import '@/mock';

// router & store
import router from '@/router';

// common 组件/func
import '@/components/common';

// 根组件
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
