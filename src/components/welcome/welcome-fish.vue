<template>
    <div class="welcome-fish">
        <div class="fish-elements">
            <div
                v-for="(item, index) in 12"
                :key="index + 'one'"
                class="el"
                :class="setClass(index + 1)"
            >
                <img src="../../assets/img/fish.svg" />
            </div>
        </div>
        <div class="fish-text">
            <span
                v-for="(item, index) in title"
                :key="index"
                :class="{ current: index == i }"
            >
                {{ item }}<strong v-show="index === 4">the brand</strong>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'welcomeFish',
};
</script>

<script lang="ts" setup>
import { RefValue } from 'unplugin-vue2-script-setup/ref-macros';

const { proxy: _this } = getCurrentInstance() as ComponentInternalInstance;

const setClass = (index: number): string => {
    return `el-${index}`;
};

const title = [
    'Being one among everyone is boring. So,',
    'we make you unique',
    'we make you big',
    'we make you stand apart',
    'we make you ',
];
// 让字体循环变换
let i: RefValue<number> = $ref(-1);
const changeText = () => {
    setTimeout(() => {
        if (i === -1) {
            i++;
        }
    }, 0);
    setInterval(() => {
        if (i < title.length - 1) {
            i++;
        } else {
            i = 0;
        }
    }, 3000);
};

onMounted(() => {
    changeText();
});
</script>

<style lang="less" scoped>
.welcome-fish {
    height: 100vh; // 等 Nav fixed后需要调整
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.fish-elements {
    width: 500px;
    height: 216px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .el {
        position: relative;
        width: 85px;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0 7px;
        transition: all 2s ease-in-out;

        &-4 {
            // translate: ;
        }

        &-6 {
            margin-left: 14px;
        }

        img {
            width: 40px;
        }
    }
}

.fish-text {
    width: 100%;
    height: 50px;
    color: #ffffff;
    position: relative;
    letter-spacing: 1px;
    font-weight: 300;

    span {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        translate: -50% 0;
        font-family: 'Lato', sans-serif;
        transition: all 2s ease-in-out;
        opacity: 0;

        strong {
            font-size: 16px;
        }
    }

    .current {
        opacity: 1;
    }
}
</style>
