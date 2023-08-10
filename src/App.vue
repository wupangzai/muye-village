<template>
    <div id="app" v-if="!isRouteFullScreen">
        <router-view></router-view>
    </div>
    <router-view v-else></router-view>
</template>

<script lang="ts">
export default {
    name: 'RootApp',
};
</script>
<script lang="ts" setup>
const { proxy: _this } = getCurrentInstance() as ComponentInternalInstance;

const isRouteFullScreen = $computed<boolean>(() => {
    return _this.$route.meta?.fullScreen;
});
</script>

<style lang="less" scoped>
#app {
    height: 100%;
}
</style>
