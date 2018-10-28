<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('ttk_account_login.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input type="text" required>
                    <div class="label">{{$t("ttk_account_login.login_input")}}</div>
                </div>
            </form>
            <form>
                <div class="input-primary">      
                    <input type="text" required>
                    <div class="label">{{$t("ttk_account_login.password_input")}}</div>
                </div>
                <div class="btn-primary">{{$t("enter_code.btn")}}</div>
            </form>
            <div class="navigation">
                <span class="nav-item">{{$t("ttk_account_login.navigation.get_password_and_login")}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">

</style>
