<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('hello.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input type="text" required>
                    <div class="label">{{$t("form.phone")}}</div>
                </div>
                <div class="btn-primary" @click="$router.push('/enter-with-code')">{{$t("form.btn")}}</div>
            </form>
            <div class="navigation">
                <span class="nav-item">{{$t("navigation.or")}}</span>
                <span class="nav-item" @click="$router.push('/ttk-account-login')">{{$t("navigation.enter")}}</span>
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
