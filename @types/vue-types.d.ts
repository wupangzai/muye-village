// Vue 原型 上的属性声明
import { createDialog } from '@/components/common';
import http from '@/packages/axios';
declare module 'vue/types/vue' {
    interface Vue {
        $createDialog: typeof createDialog;
        $http: typeof http;
    }
}
