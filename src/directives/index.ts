import Vue from 'vue';
import Loading from './loading';

const directiveList = [
    {
        key: 'loading',
        value: Loading,
    },
];

directiveList.forEach((item) => Vue.directive(item.key, item.value));
