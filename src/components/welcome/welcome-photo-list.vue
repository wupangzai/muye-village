<template>
    <div class="welcome-photo-list">
        <div class="right-photo">
            <div class="bottom-photo wow fadeInUp">
                <div class="bottom-photo-title">
                    Fun is doing what you love!
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'WelcomePhotoList',
};
</script>

<script lang="ts" setup></script>

<style lang="less" scoped>
.welcome-photo-list {
    background: #ffffff;
    padding: 0 5%;
    height: 942px;
    min-height: 942px;
    background-image: url('@/assets/img/sleep.png');
    background-position: 5% 0%;

    background-size: 15% auto;
    background-repeat: no-repeat;

    .right-photo {
        height: 100%;
        background-image: url('@/assets/img/eat.png');
        background-position: 100% 2%;
        background-size: 15% auto;
        background-repeat: no-repeat;
        vertical-align: bottom;
        // padding-bottom: 50px;
    }

    .bottom-photo {
        width: 100%;
        height: 100%;
        position: relative;
        // padding-top: 400px;
        background-image: url('@/assets/img/phone-call.png');
        background-position: center 77%;
        background-size: 15% auto;
        background-repeat: no-repeat;

        &-title {
            position: absolute;
            left: 0;
            bottom: 90px;
            padding-top: 400px;
            font-size: 60px;
            font-weight: 300;
            line-height: 72px;
            letter-spacing: 1px;
        }
    }
}
</style>
