import { VueConstructor, VNode, VNodeDirective, DirectiveOptions } from 'vue';
import { DirectiveBinding } from '@vue/composition-api';

import ToolTip from './index.vue';

interface El extends HTMLElement {
    instance: InstanceType<VueConstructor>;
}

/**
 * 用于给指定元素/组件绑定一个 tooltip 提示, 可通过第一个修饰符来指定 tooltip 的呼出位置，eg: v-tooltip.bottom
 * 不可嵌套使用，如
 * <div v-tooltip="'1'">
 *   <div v-tooltip="'2'"></div>
 * </div>
 */
export default {
    bind(el: El, binding: DirectiveBinding<{}>, vnode: VNode) {
        const modifiersKey = Object.keys(binding.modifiers);
        const instanceToolTip = new ToolTip({
            propsData: {
                content: binding.value,
                placement: modifiersKey?.[0] ?? 'top',
            },
        });

        let vnodeDirectives = vnode!.data!.directives;

        // 一般在内部使用，需要过滤掉自身 tooltip 指令，防止爆栈
        vnode!.data!.directives = vnodeDirectives!.filter(
            (directive: VNodeDirective) => directive.name !== 'tooltip',
        );

        // 下面这种方法我也不知道为啥就可以了，试出来的
        // 给实例组件的 tooltip 内容插槽插入 该el
        // 这里类型是 vnode[],不知道为啥 TODO FIXME
        instanceToolTip.$slots.tooltip = vnode as unknown as VNode[];

        // 然后渲染，当该 el 被 hover 的时候就自动会 append 到 body
        const renderInstance = instanceToolTip.$mount();
        // 记录该实例，unbind 的时候使用
        el.instance = renderInstance;
    },

    unbind(el: El, binding: DirectiveBinding<{}>, vnode: VNode) {
        el.instance && el.instance.$destroy();
        document.body.removeChild(el.instance.$el);
    },
} as unknown as DirectiveOptions;
