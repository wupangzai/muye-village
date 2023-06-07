// 这里做统一注册
import Vue from 'vue';
import { createDialog } from './dialog';

Vue.prototype.$createDialog = createDialog;
