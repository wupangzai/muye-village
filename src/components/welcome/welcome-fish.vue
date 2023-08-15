<template>
    <div class="welcome-fish">
        <div class="fish-elements">
            <div
                v-for="(item, index) in 12"
                :key="index + 'one'"
                class="el"
                :class="setClass(index + 1)"
            >
                <img
                    src="../../assets/img/fish.svg"
                    :class="{ 'el-other-off': !showCommon }"
                    v-if="index !== 3"
                />
                <svg
                    ref="specialFish"
                    class="special"
                    style="enable-background·new 167.656 352.531 42 20;"
                    viewBox="167.656 352.531 42 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    v-if="index === 3"
                >
                    <path
                        id="fishBody"
                        style="
                            fill: none;
                            stroke-miterlimit: 10;
                            transition: all 2s ease 0s;
                        "
                        class="pre-unique"
                        stroke-linejoin="round"
                        xml:space="preserve"
                        d="M205.093,362.893c0.137-0.366,2.803-0.554,2.803-0.554
							s-13.138-18.904-29.079,0c0,0-6.657,8.033-10.16,8.033c0,0,0-8.217,5.606-8.217c-5.606,0-5.606-8.217-5.606-8.217
						    c3.504,0,10.16,8.033,10.16,8.033c15.941,18.904,27.911,2.493,27.911,2.493S204.937,363.309,205.093,362.893z"
                    ></path>
                    <circle
                        id="fishEye"
                        style="
                            fill: none;
                            stroke-miterlimit: 10;
                            transition: all 2s ease 0s;
                        "
                        class="pre-unique"
                        cx="200.48"
                        cy="360.556"
                        r="1.532"
                    ></circle>
                </svg>
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

// 设置所有鱼的显示隐藏
let showAllFish: RefValue<boolean> = $ref(false);
// 修改普通鱼的class
let showCommon: RefValue<boolean> = $ref(true);
const setClass = (index: number) => {
    if (showAllFish === true) {
        return `el-${index} el-show`;
    }
    return `el-${index}`;
};

// 修改特殊鱼的class
const setSpecialFish = (fishRef: any[]) => {
    setTimeout(() => {
        fishRef[0].children[0].classList.add('unique');
        fishRef[0].children[1].classList.add('unique');
        setTimeout(() => {
            fishRef[0].classList.add('big');
            setTimeout(() => {
                fishRef[0].classList.add('stand-apart');
                setTimeout(() => {
                    showCommon = false;
                    fishRef[0].classList.add('you');
                    setTimeout(() => {
                        fishRef[0].classList.remove(
                            'big',
                            'stand-apart',
                            'you',
                        );
                        console.log(fishRef[0].children[0].classList);
                        fishRef[0].children[0].classList.remove('unique');
                        fishRef[0].children[1].classList.remove('unique');
                        showCommon = true;
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
};

const title = [
    'Being one among everyone is boring. So,',
    'we make you unique',
    'we make you big',
    'we make you stand apart',
    'we make you ',
];
// 让字体循环变换及控制所有鱼的出现
let i: RefValue<number> = $ref(-1);
const changeText = () => {
    setTimeout(() => {
        // 展示所有鱼图标
        showAllFish = true;
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
    const specialFishRef: any = _this.$refs['specialFish'];
    setSpecialFish(specialFishRef);
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
        opacity: 0;
        transition: all 2s ease-in-out;

        &-4 {
            .special {
                position: absolute;
                width: 48px;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background: url('@/assets/img/fish.svg');
                transition: all 2s ease-in-out;
            }

            .pre-unique {
                stroke: #d1d1d1;
                transition: all 2s ease-in-out;
            }

            .unique {
                stroke: rgb(255, 204, 0);
            }

            .big {
                background: url('');
                width: 85px;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
            }

            .stand-apart {
                left: 50%;
                transform: translateX(-50%);
                bottom: 20px;
            }

            .you {
                left: -60%;
                bottom: -80px;
            }
        }

        &-6 {
            margin-left: 14px;
        }

        &-show {
            opacity: 1;
        }

        &-other-off {
            opacity: 0;
        }

        img {
            width: 48px;
            transition: all 2s ease-in-out;
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
