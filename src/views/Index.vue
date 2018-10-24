<template>
    <div class="wrapper">
        <header>
            <img class="logo" src="../assets/logo.svg" alt="tattelecom">
            <div class="internationalization noselect" @click="setLocalization()">{{$t("internationalization.title")}}</div>
        </header>
        <main>
            <aside class="aside-left">
                <div>left</div>
            </aside>
            <aside class="aside-right">
                <div>
                    right
                    <router-view/>
                </div>
            </aside>
        </main>
        <footer>
            <div>© ПАО «Таттелеком» 2018</div>
            <div>powered by <span>tim agency</span></div>
        </footer>
    </div>
</template>

<script>
export default {
 methods: {
    setLocalization() {
      this.$i18n.locale = this.$i18n.locale === "ru" ? "en" : "ru";
    }
  }
}
</script>

<style lang="less">
@import url('../style/index.less');

</style>
