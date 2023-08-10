import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

// 三方库
import '@/packages/elementui';
import '@/packages/axios';
import '@/mock';
import '@/packages/wowjs';

// router & store
import router from '@/router';

// common 组件/func
import '@/components/common';

// 自定义指令
import '@/directives'; // loading 需在 elementui 后引入，覆盖其 v-loading

// 根组件
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
