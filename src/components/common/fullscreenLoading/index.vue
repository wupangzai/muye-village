<template>
    <div class="fullscreen-loading">
        <div class="container">
            <div class="content"></div>
            <div v-if="description" class="description">{{ description }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class FullscreenLoading extends Vue {
    @Prop({ default: '' })
    description!: string;
}
</script>

<style lang="less" scoped>
.fullscreen-loading {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(128, 128, 128, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    z-index: 999;
    .container {
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;
        .description {
            margin-top: 8px;
            font-size: 14px;
            color: #ffffff;
        }
    }

    .content {
        width: 48px;
        height: 48px;
        border: 2px solid #fff;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        -webkit-animation: rotation 1s linear infinite;
        animation: rotation 1s linear infinite;
    }
    .content:before {
        left: auto;
        top: auto;
        right: 0;
        bottom: 0;
        content: '';
        position: absolute;
        background: #ff3d00;
        width: 6px;
        height: 6px;
        transform: translate(-150%, -150%);
        border-radius: 50%;
    }
    .content:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background: #ff3d00;
        width: 6px;
        height: 6px;
        transform: translate(150%, 150%);
        border-radius: 50%;
    }
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
