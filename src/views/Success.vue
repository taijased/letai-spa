<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('success.title')"></div>
            <form>
                <div class="btn-primary">{{$t("success.btn")}}</div>
            </form>
            <div class="navigation">
                <span class="nav-item">{{$t("success.navigation.to_browser")}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">

</style>
