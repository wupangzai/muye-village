<template>
    <div class="welcome-fish">welcome-fish</div>
</template>

<script lang="ts">
export default {
    name: 'welcomeFish',
};
</script>

<script lang="ts" setup></script>

<style lang="less" scoped>
.welcome-fish {
    height: calc(100vh - 50px); // 等 Nav fixed后需要调整
}
</style>
