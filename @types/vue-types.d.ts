// Vue 原型 上的属性声明
import { createDialog } from '@/components/common';

declare module 'vue/types/vue' {
    interface Vue {
        $createDialog: typeof createDialog;
    }
}
