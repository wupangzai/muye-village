<template>
    <el-dialog
        class="dialog"
        :visible.sync="visible"
        v-bind="{ ...dialogProps }"
    >
        <div class="dialog-content">
            <slot name="content" />
        </div>
        <span slot="footer" v-if="showFooter" class="dialog-footer">
            <el-button @click="changeAction('close')">{{
                cancelText
            }}</el-button>
            <el-button type="primary" @click="changeAction('confirm')">{{
                confirmText
            }}</el-button>
        </span>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Provide } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
    @Prop()
    title?: string; //弹窗 标题

    @Prop({ default: '500px' })
    width?: string; // 弹窗 宽度

    @Prop({ default: true })
    showCloseIcon?: boolean; // 是否显示右上角关闭 icon

    @Prop({ default: '' })
    customClass?: string; // 弹窗 自定义class

    @Prop({ default: true })
    showFooter?: boolean; // 是否展示footer中的按钮

    @Prop({ default: '取消' })
    cancelText?: string; // footer中取消按钮文字展示内容

    @Prop({ default: '确定' })
    confirmText?: string; // footer中确认按钮文字展示内容

    @Prop({ default: false })
    closeOnPressEscape?: boolean; // 按下 esc 是否可以关闭弹窗

    @Prop({ default: false })
    closeOnClickModal?: boolean; // 点击蒙层是否可以关闭弹窗

    @Prop({ default: false })
    fullscreen?: boolean; // 是否是全屏弹窗

    visible = true;

    action = 'close';

    get dialogProps() {
        return {
            width: this.width,
            title: this.title,
            showClose: this.showCloseIcon,
            customClass: this.customClass,
            closeOnPressEscape: this.closeOnPressEscape,
            closeOnClickModal: this.closeOnClickModal,
            fullscreen: this.fullscreen,
        };
    }

    actionCallBack(action: string) {}

    @Watch('visible')
    handler() {
        this.actionCallBack(this.action);
    }

    // 路由变化的时候关闭弹窗
    @Watch('$route.name')
    handleRouteChange() {
        this.actionCallBack('close');
    }

    // 修改action标志，判断点击的是取消还是确定
    @Provide('changeAction') // 暴露action 给外部组件
    changeAction(action: string) {
        this.action = action;
        this.visible = false;
    }
}
</script>

<style lang="less">
// 因为弹窗是挂载到 body 而非 挂载到 app，故不加 scoped

.el-dialog {
    border-radius: 4px;
}

.el-dialog__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 24px;
    padding: 12px 20px 13px 20px;

    font-weight: 600;

    .el-dialog__title {
        font-size: 16px;
    }

    .el-dialog__headerbtn {
        position: initial;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f0f1f3;
    }
}

.el-dialog__body {
    padding: 20px;
}
</style>
