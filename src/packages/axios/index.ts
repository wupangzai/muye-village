import Vue from 'vue';
import { http } from './common';

console.log('[ http ] >', http);

Vue.prototype.$http = http;

export default http;
