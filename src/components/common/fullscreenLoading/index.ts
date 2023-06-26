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
 * @returns 返回一个 Promise，创建成功 resolve 一个可以关闭弹窗的函数
 */
export function openFullscreenLoading(
    description?: string,
): Promise<() => void> {
    return new Promise((resolve, reject) => {
        if (lastInstance) {
            closeLoading(lastInstance);
        }
        const instance = new FullscreenLoading({
            propsData: {
                description,
            },
        });

        try {
            instance.$mount();
            document.body.appendChild(instance.$el);
            lastInstance = instance;
            resolve(() => closeLoading(instance));
        } catch (e) {
            reject(e);
        }
    });
}
