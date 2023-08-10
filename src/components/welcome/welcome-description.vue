<template>
    <div class="welcome-description">
        <div class="welcome-description-top">
            <div class="welcome-description-title">Hire us for anything</div>
            <div class="welcome-description-sub-title">
                as long as there's space for us to be creative!
            </div>
        </div>
        <div class="welcome-description-middle">
            That's it! No boring paragraphs of self boasting. We'll just list
            out the services we do and let our works do rest of the talking.
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'welcomeDescription',
};
</script>

<script lang="ts" setup></script>

<style lang="less" scoped>
.welcome-description {
    width: 100%;
    height: 450px;
    background: #ffffff;
    padding: 150px 5% 100px 5%;

    &-top {
        margin-bottom: 50px;
    }

    &-middle {
        font-size: 16px;
        font-weight: 300;
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
