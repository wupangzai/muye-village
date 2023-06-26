// 这里做统一注册
import Vue from 'vue';
import { createDialog } from './dialog';
import { openFullscreenLoading } from './fullscreenLoading';

const globalMethods = [
    {
        key: '$createDialog',
        method: createDialog,
    },
    {
        key: '$openFullscreenLoading',
        method: openFullscreenLoading,
    },
];

globalMethods.forEach(
    (methodItem) => (Vue.prototype[methodItem.key] = methodItem['method']),
);
