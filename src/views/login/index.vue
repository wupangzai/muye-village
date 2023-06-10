<template>
    <div class="login">
        <login-card class="login-card" />
        <div class="login-left-top"></div>
        <div class="login-right-bottom"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LoginCard from './login-card.vue';

@Component({
    components: {
        LoginCard,
    },
})
export default class Login extends Vue {}
</script>

<style lang="less" scoped>
@background-color: #23364c;
@decoration-color: #2d435c;
.login {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: @background-color;

    &-card {
        margin: auto;
    }

    &-left-top {
        position: absolute;
        background-color: @decoration-color;
        width: 60%;
        top: -15%;
        left: -50px;
        height: 30%;
        border-radius: 50%;
        transform: rotate(-9deg);
    }

    &-right-bottom {
        position: absolute;
        background-color: @decoration-color;
        width: 120%;
        height: 120%;
        border-radius: 60%;
        bottom: -65%;
        right: -60%;
    }
}
</style>
