<template>
    <div id="app" v-if="!isRouteFullScreen">
        <router-view></router-view>
    </div>
    <router-view v-else></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    // 是否全屏展示
    get isRouteFullScreen() {
        return this.$route.meta?.fullScreen;
    }
}
</script>

<style></style>
