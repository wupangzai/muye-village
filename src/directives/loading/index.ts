import { DirectiveBinding, VueConstructor, VNode } from 'vue';
import Loading from './index.vue';

function insertDom(parent: Element, el: Element) {
    parent.appendChild(el);
}

interface El extends HTMLBaseElement {
    instance: InstanceType<VueConstructor>;
}

function toggleLoading(el: El, binding: DirectiveBinding<{}>) {
    const renderDom = el.instance.$el;

    if (binding.value) {
        el.style.position = 'relative';
        insertDom(el, renderDom);
        return;
    }
    el.style.position = 'static';

    if (renderDom) {
        el.instance.$el.parentNode?.removeChild(renderDom);
    }
}

// 局部需要 loading 动画的自定义loading
export default {
    // 绑定时执行
    bind(el: El, binding: DirectiveBinding<{}>, vnode: VNode) {
        const mask = new Loading().$mount();
        el.instance = mask;

        if (binding.value) {
            toggleLoading(el, binding);
        }
    },

    // 所在组件的 VNode 更新时调用--比较更新前后的值
    update(el: El, binding: DirectiveBinding<{}>) {
        if (binding.oldValue !== binding.value) {
            toggleLoading(el, binding);
        }
    },
    // 指令与元素解绑时调用
    unbind(el: El) {
        el.instance && el.instance.$destroy();
        el.instance.$el &&
            el.instance.$el.parentNode &&
            el.instance.$el.parentNode.removeChild(el.instance.$el);
    },
};
