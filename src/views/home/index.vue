<template>
    <div class="home" v-loading="visible">
        <!-- TODO FIXME  rm -->
        <el-button @click="handler">toggleLoading</el-button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AppHome',
};
</script>

<script lang="ts" setup>
const { proxy: _this } = getCurrentInstance() as ComponentInternalInstance;

let visible = $ref(true);

function handler() {
    const a = _this.$openFullscreenLoading('dynamice loading text....');

    visible = !visible;
}
</script>

<style lang="less" scoped>
// TODO FIXME  rm

.home {
    width: 500px;
    height: 500px;
    margin-left: 100px;

    button {
        margin-top: 500px;
    }
}
</style>
