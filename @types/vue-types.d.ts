// Vue 原型 上的属性声明
import { createDialog } from '@/components/common/dialog';
import { openFullscreenLoading } from '@/components/common/fullscreenLoading';
import { WOW } from 'wowjs';

import http from '@/packages/axios';

declare module 'vue/types/vue' {
    interface Vue {
        $createDialog: typeof createDialog;
        $openFullscreenLoading: typeof openFullscreenLoading;
        $http: typeof http;
        $wow: InstanceType<WOW>;
    }
}
