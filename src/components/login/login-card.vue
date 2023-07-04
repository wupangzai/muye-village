<template>
    <div class="login-card">
        <div class="login-card-left">
            <div class="desc">
                <h1>Welcome！</h1>
                <span>木叶系统-平台端</span>
                <img class="left-img" src="@/assets/img/login-left.png" />
            </div>
        </div>
        <div class="login-card-right">
            <login-form />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'LoginCard',
};
</script>

<script lang="ts" setup>
import LoginForm from './login-form.vue';
</script>

<style lang="less" scoped>
@left-radius: 50%;

.login-card {
    position: relative;
    z-index: 1;
    min-width: 1024px; // or 百分比？
    height: 500px;
    display: flex;
    align-items: center;

    &-left {
        z-index: 3;
        flex: 0.4;
        height: 100%;
        color: #ffffff;
        display: flex;
        background-color: #1b2d43;
        border-top-right-radius: @left-radius;
        border-bottom-right-radius: @left-radius;
        border-radius: 8px @left-radius @left-radius 8px;
        animation: card 1s ease;
        cursor: pointer;
        transition: all 1s ease-in-out;

        &:hover {
            transition: all 1s ease;
            transform: scale(1.1, 1.1);
        }

        .desc {
            display: flex;
            flex-direction: column;
            margin: 5% 0 0 10%;
        }

        .left-img {
            margin: auto 0;
            width: 200px;
            height: 200px;
        }
    }

    &-right {
        z-index: 2;
        flex: 0.5;
        border-radius: 8px;
        margin-left: -10%;
        background-color: #fff;
        height: 80%;
        animation: card 1s ease;
    }
}

@keyframes card {
    0% {
        margin-top: -150px;
    }
    50% {
        margin-top: 70px;
    }
    100% {
        margin-top: 0;
    }
}
</style>
