// 弹窗模板组件
import CustomDialog from './custom-dialog.vue';
// 需要时可引入store等在 app.vue 使用的插件
// import router from '../../router';

// 是否为 VNode 节点
const isVNode = (node: unknown) => {
    return (
        node !== null &&
        typeof node === 'object' &&
        Object.prototype.hasOwnProperty.call(node, 'componentOptions')
    );
};

export function createDialog(options?: any) {
    // 不使用 Vue 来extend 模板组件原因见 https://www.yuque.com/u25244778/kdzwbw/qg96drlo3f78zg0u
    const myconstructor = CustomDialog.extend({
        // router, // router 未开启， TODO:FIXME
        // store
    });

    const instance = new myconstructor({
        propsData: {
            ...options,
        },
    });

    const { content } = options;

    let contentSlot = null;

    if (content !== undefined) {
        if (isVNode(content)) {
            contentSlot = content;
        } else if (typeof content === 'string') {
            contentSlot = instance.$createElement(
                'span',
                {
                    class: { content: true },
                },
                content,
            );
        } else {
            throw new Error(
                '[dialog] property `content` should be either a string or a v node!',
            );
        }
    }

    // 给实例的具名插槽 插入传入的内容
    if (contentSlot) {
        instance.$slots.content = contentSlot;
    }

    instance.$mount();

    document.body.appendChild(instance.$el);

    return new Promise((resolve, reject) => {
        // 不用箭头函数，获取实例的this, 给callBack 赋值
        (instance as any).actionCallBack = async function (action: string) {
            if (action === 'confirm') {
                resolve(action);
            }
            if (action === 'close') {
                reject(action);
            }
            this.$destroy();
            this.$el.parentNode!.removeChild(this.$el);
        };
    });
}
