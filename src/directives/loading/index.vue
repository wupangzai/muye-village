<template>
    <div class="loading">
        <div class="content">write loading here</div>
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
    background-color: #cccc;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;

    .content {
        margin: auto;
    }
}
</style>
