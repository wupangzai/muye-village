<template>
    <div class="loading">
        <div class="container">
            <div class="content"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {}
</script>

<style lang="less" scoped>
.loading {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(128, 128, 128, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    z-index: 999;
    .container {
        margin: auto;
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
