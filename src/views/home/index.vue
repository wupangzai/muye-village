<template>
    <div class="home" v-loading="visible">
        <!-- TODO FIXME  rm -->
        <el-button @click="handler">toggleLoading</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { openFullscreenLoading } from '@/components/common/fullscreenLoading';

@Component
export default class Home extends Vue {
    // TODO FIXME  rm

    visible = true;

    async handler() {
        const a = await openFullscreenLoading('dynamice loading text....');

        this.visible = !this.visible;
    }
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
