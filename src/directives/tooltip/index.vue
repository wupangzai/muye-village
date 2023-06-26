<template>
    <el-tooltip
        popper-class="custom-tooltip"
        :content="content"
        :placement="placement"
    >
        <slot name="tooltip"></slot>
    </el-tooltip>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ToolTip extends Vue {
    @Prop()
    content!: string;

    @Prop({ default: 'top' })
    placement!: string;
}
</script>

<style lang="less">
.custom-tooltip {
    max-width: 300px;
}
</style>
