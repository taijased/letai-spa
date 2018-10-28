<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('enter_code.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input type="text" required>
                    <div class="label">{{$t("enter_code.input")}}</div>
                </div>
                <div class="btn-primary">{{$t("enter_code.btn")}}</div>
            </form>
            <div class="navigation">
                <span class="nav-item" @click="$router.push('/voice-login')">{{$t("enter_code.navigation.voice")}}</span>
                <span class="nav-item">{{$t("navigation.enter")}}</span>
                <span class="nav-item">{{$t("navigation.auth")}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">

</style>
