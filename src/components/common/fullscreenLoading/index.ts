import FullscreenLoading from './index.vue';

type LoadingInstance = InstanceType<typeof FullscreenLoading>;

let lastInstance: LoadingInstance | null = null;

function closeLoading(instance: LoadingInstance) {
    const el = instance.$el;
    if (el) {
        instance?.$destroy();
        document.body.removeChild(instance.$el);
        lastInstance = null;
    }
}

/**
 * 创建一个全屏的 loading 动画
 *
 * @returns 返回一个可以关闭弹窗的函数
 */
export function openFullscreenLoading(description?: string): () => void {
    if (lastInstance) {
        closeLoading(lastInstance);
    }
    const instance = new FullscreenLoading({
        propsData: {
            description,
        },
    });
    instance.$mount();
    document.body.appendChild(instance.$el);
    lastInstance = instance;
    return () => closeLoading(instance);
}
