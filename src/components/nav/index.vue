<template>
    <div class="nav">
        <div class="nav-left">
            <img src="http://flamboyamedia.com/images/logo.png" alt="muye" />
        </div>
        <div class="nav-right">
            <div
                v-for="item in navList"
                :key="item.url"
                class="nav-right-item"
                @click="() => handleClick(item.url)"
            >
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AppNav',
};
</script>

<script lang="ts" setup>
interface NavOption {
    name: string;
    url: string;
    clickFn?: () => void;
}

interface Props {
    navList: NavOption[];
}

const props = withDefaults(defineProps<Props>(), {
    navList: () => [
        {
            name: 'HOME',
            url: 'home',
            clickFn: () => {},
        },
        {
            name: 'LOGIN',
            url: 'login',
            clickFn: () => {},
        },
        {
            name: 'ABOUT US',
            url: '',
            clickFn: () => {},
        },
    ],
});

function handleClick(url: string) {
    props.navList.find((navOption) => navOption.url === url)?.clickFn?.();
}
</script>

<style lang="less" scoped>
.nav {
    width: 100%;
    height: 50px;
    opacity: 0.5;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    transition: all 0.5s;

    &-left {
        img {
            width: 30px;
            height: 30px;
        }
    }

    &-right {
        display: flex;

        &-item {
            color: #ffffff;
            font-size: 12px;
            margin-right: 20px;
            transition: all 0.5s;

            &:hover {
                cursor: pointer;
                opacity: 0.5;
            }

            &:nth-last-child(1) {
                margin-right: 0;
            }
        }
    }

    &:hover {
        opacity: 1;
    }
}
</style>
