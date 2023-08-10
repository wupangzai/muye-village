<template>
    <el-container direction="vertical">
        <el-header>
            <app-nav :navList="navList" />
        </el-header>
        <welcome-fish />
        <welcome-description />
        <welcome-photo-list />
        <welcome-footer />
    </el-container>
</template>

<script lang="ts">
export default {
    name: 'AppWelcome',
};
</script>

<script lang="ts" setup>
import appNav from '@/components/nav/index.vue';
import {
    welcomeFish,
    welcomeDescription,
    WelcomePhotoList,
    WelcomeFooter,
} from '@/components/welcome';

const { proxy: _this } = getCurrentInstance() as ComponentInternalInstance;

onMounted(async () => {
    await _this.$wow.init();
});

const navList = [
    {
        name: 'HOME',
        url: 'home',
        clickFn: () => {
            _this.$router.push('/');
        },
    },
    {
        name: 'LOGIN',
        url: 'login',
        clickFn: () => {
            _this.$router.push('/login');
        },
    },
    {
        name: 'ABOUT US',
        url: '',
        clickFn: () => {},
    },
];
</script>

<style lang="less" scoped>
.el-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #000000;
}

.el-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}
</style>
