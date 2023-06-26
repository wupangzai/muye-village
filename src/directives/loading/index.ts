import Loading from './index.vue';

function insertDom(parent: HTMLBaseElement, el: any) {
    parent.appendChild(el);
}

function toggleLoading(el: any, binding: any) {
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

// TODO FIXME 该文件any替换成对应的类型
// 局部需要 loading 动画的自定义loading
export default {
    // 绑定时执行
    bind(el: any, binding: any, vnode: any) {
        console.log('[  ] >', binding);
        const mask = new Loading({
            el: document.createElement('div'),
        });
        el.instance = mask;

        if (binding.value) {
            toggleLoading(el, binding);
        }
    },

    // 所在组件的 VNode 更新时调用--比较更新前后的值
    update(el: any, binding: { oldValue: any; value: any }) {
        if (binding.oldValue !== binding.value) {
            toggleLoading(el, binding);
        }
    },
    // 指令与元素解绑时调用
    unbind(el: any, binding: any) {
        el.instance && el.instance.$destroy();
        el.instance.$el &&
            el.instance.$el.parentNode &&
            el.instance.$el.parentNode.removeChild(el.instance.$el);
    },
};
