<template>
    <el-container direction="vertical">
        <el-header>
            <Nav></Nav>
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
import Nav from '@/components/nav/index.vue';
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
</script>

<style lang="less" scoped>
.el-container {
    width: 100%;
    height: 100%;
    background-color: #000000;
}
</style>
