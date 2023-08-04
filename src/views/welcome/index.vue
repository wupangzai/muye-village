<template>
    <el-container>
        <Nav></Nav>
    </el-container>
</template>

<script lang="ts">
export default {
    name: 'AppWelcome',
};
</script>

<script lang="ts" setup>
import Nav from '@/components/nav/index.vue';
</script>

<style lang="less" scoped>
.el-container {
    width: 100%;
    height: 100vh;
    background-color: #000000;
}
</style>
