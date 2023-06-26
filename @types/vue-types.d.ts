// Vue 原型 上的属性声明
import { createDialog, openFullscreenLoading } from '@/components/common';
import http from '@/packages/axios';

declare module 'vue/types/vue' {
    interface Vue {
        $createDialog: typeof createDialog;
        $openFullscreenLoading: typeof openFullscreenLoading;
        $http: typeof http;
    }
}
