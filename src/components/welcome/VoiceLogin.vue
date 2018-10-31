<template>
    <div class="container">
        <div class="content">
            <div class="subtitle" v-html="$t('voice_login.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input type="text" required>
                    <div class="label">{{$t("enter_code.input")}}</div>
                </div>
                <div class="btn-primary" @click="$router.push('/success')">{{$t("enter_code.btn")}}</div>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">

</style>
