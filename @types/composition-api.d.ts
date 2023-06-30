import { ComponentInternalInstance as instance } from '@vue/composition-api';

declare global {
    interface ComponentInternalInstance extends instance {}
}

export {};
