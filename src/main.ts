import Vue from 'vue';
import '@/packages/elementui';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
