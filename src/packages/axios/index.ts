import Vue from 'vue';
import { http } from './common';

Vue.prototype.$http = http;

export default http;
