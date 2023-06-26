import Vue from 'vue';
import Loading from './loading';
import Tooltip from './tooltip';

const directiveList = [
    {
        key: 'loading',
        value: Loading,
    },
    {
        key: 'tooltip',
        value: Tooltip,
    },
];

directiveList.forEach((item) => Vue.directive(item.key, item.value));
