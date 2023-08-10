<template>
    <el-container direction="vertical">
        <Nav></Nav>
        <welcome-fish />
        <welcome-description />
    </el-container>
</template>

<script lang="ts">
export default {
    name: 'AppWelcome',
};
</script>

<script lang="ts" setup>
import Nav from '@/components/nav/index.vue';
import { welcomeFish, welcomeDescription } from '@/components/welcome';
</script>

<style lang="less" scoped>
.el-container {
    width: 100%;
    height: 100%;
    background-color: #000000;
}
</style>
