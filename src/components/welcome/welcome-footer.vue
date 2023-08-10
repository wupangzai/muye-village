<template>
    <div class="welcome-footer">
        <div class="welcome-footer-desc wow fadeInUp">
            <div class="welcome-footer-title">{{ title }}</div>
            <div class="welcome-footer-info">
                <div
                    class="info-item"
                    v-for="(item, index) in textList"
                    :key="index"
                >
                    <div class="info-item-label">{{ item.label }}</div>
                    <div class="info-item-value">{{ item.value }}</div>
                </div>
            </div>
        </div>

        <div class="welcome-social-links">
            <div class="social-photo">
                <a class="face-book-icon">
                    <img src="../../assets/img/fb.svg" alt="" />
                </a>
                <a class="face-book-icon">
                    <img src="../../assets/img/yt.svg" alt="" />
                </a>
                <a class="face-book-icon">
                    <img src="../../assets/img/be.svg" alt="" />
                </a>
                <a class="face-book-icon">
                    <img src="../../assets/img/tw.svg" alt="" />
                </a>
            </div>
        </div>
        <div class="copy-right">{{ copyRight }}</div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'WelcomeFooter',
};
</script>

<script lang="ts" setup>
const title = 'And here are few things we loved recently';

const textList = [
    {
        label: 'Music',
        value: "Coldplay's 'A headful of dreams', Rahman's 'Raunaq'",
    },
    {
        label: 'Films',
        value: 'Room, Spotlight',
    },
    {
        label: 'Books',
        value: 'Ogilvy on advertising, Pandemonium',
    },
];

const copyRight = '© MuYe Media, 2023';
</script>

<style lang="less" scoped>
.welcome-footer {
    background-color: #ffffff;
    padding: 0 5%;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 50px;
}

.welcome-footer-title {
    font-weight: 400;
    margin-bottom: 15px;
}

.info-item {
    font-weight: 300;
    display: flex;
    margin-bottom: 15px;

    &-label {
        &::after {
            content: ': ';
            margin-right: 5px;
        }
    }
}

.welcome-social-links {
    padding: 100px 0 10px;

    img {
        width: 20px;
    }

    a {
        font-size: 46px;
        border: 1px solid #000;
        border-radius: 50%;
        display: inline-block;
        opacity: 0.5;
        padding: 7px 15px 14px;
        margin-right: 5px;
    }
}

.copy-right {
    font-size: 12px;
    opacity: 0.5;
    line-height: 16px;
}
</style>
