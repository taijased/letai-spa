<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('horeca.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input type="text" required>
                    <div class="label">{{$t("horeca.input")}}</div>
                </div>
                <div class="btn-primary">{{$t("horeca.btn_change")}}</div>
            </form>
            <div class="subtitle" v-html="$t('horeca.second_subtitle')"></div>
            <form>
                <div class="btn-primary">{{$t("horeca.btn_speed")}}</div>
                <div class="navigation">
                    <span class="nav-item">{{$t("horeca.navigation.horeca")}}</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">

</style>
