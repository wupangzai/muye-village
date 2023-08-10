<template>
    <div class="welcome-description">
        <div class="welcome-description-top wow fadeInUp">
            <div class="welcome-description-title">{{ title }}</div>
            <div class="welcome-description-sub-title">
                {{ subTitle }}
            </div>
        </div>
        <div class="welcome-description-middle wow fadeInUp">
            {{ middleTitle }}
        </div>
        <div class="welcome-description-bottom">
            <div
                class="bottom-card-item wow fadeInUp"
                v-for="(config, index) in cardConfigList"
                :key="index"
            >
                <div class="icon-desc">
                    <span :class="config.icon"></span>
                    <span class="desc">{{ config.iconDesc }}</span>
                </div>
                <div
                    class="bottom-card-list"
                    v-for="(text, i) in config.textList"
                    :key="i"
                >
                    <div class="text-list">{{ text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'welcomeDescription',
};
</script>

<script lang="ts" setup>
const title = 'Hire us for anything';

const subTitle = "as long as there's space for us to be creative!";

const middleTitle =
    "That's it! No boring paragraphs of self boasting. We'll just list out the services we do and let our works do rest of the talking.";

const cardConfigList = [
    {
        icon: 'icon-video',
        iconDesc: 'Video Making',
        textList: ['Ad Films', 'Corporate Films', 'Explainer Films'],
    },
    {
        icon: 'icon-flag',
        iconDesc: 'BRANDING',
        textList: ['Brand Names', 'Branding Materials', 'Brand Guidelines'],
    },
    {
        icon: 'icon-desktop',
        iconDesc: 'WEB',
        textList: ['UX Flow and UI Designing', 'Web designing', 'Wordpress'],
    },
];
</script>

<style lang="less" scoped>
.welcome-description {
    width: 100%;
    background: #ffffff;
    padding: 150px 5% 100px 5%;

    &-top {
        margin-bottom: 50px;
    }

    &-middle {
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 15px;
    }

    &-bottom {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
    }

    .bottom-card-item {
        width: 30%;
    }

    .bottom-card-list {
        font-size: 14px;
        // opacity: 0.6;
        color: #aaa;
        letter-spacing: 1px;
        font-weight: 300;
    }

    .icon-desc {
        font-size: 32px;
        border-bottom: 1px solid #aaa;
        padding-bottom: 15px;
        color: #aaa;
        font-weight: 300;
        display: flex;
        margin-bottom: 30px;

        .desc {
            padding-left: 10px;
            font-size: 14px;
            letter-spacing: 2px;
            padding-top: 4px;
        }
    }

    .text-list {
        margin-bottom: 15px;
        line-height: 24px;
    }

    &-title {
        font-size: 60px;
        font-weight: 300;
        margin-bottom: 6px;
        font-family: 'Lato', sans-serif;
    }

    &-sub-title {
        font-size: 30px;
        font-weight: 300;
    }
}
</style>
