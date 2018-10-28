<template>
    <div class="wrapper">
        <header>
            <img class="logo" src="../assets/logo.svg" alt="tattelecom">
            <div class="internationalization noselect" @click="setLocalization()">{{$t("internationalization.title")}}</div>
        </header>
        <main>
            <aside class="aside-left">
                <!-- <img class="macbook" src="../assets/macbook.svg" alt="macbook"> -->
                <RandomBubbles/>
            </aside>
            <aside class="aside-right">
                <router-view/>
            </aside>
        </main>
        <footer>
            <div>© ПАО «Таттелеком» 2018</div>
            <div>powered by <span>tim agency</span></div>
        </footer>
    </div>
</template>

<script>
import RandomBubbles from '../components/RandomBubbles'
import '../style/index.less'
import '../style/font.css'
export default {
 methods: {
    setLocalization() {
      this.$i18n.locale = this.$i18n.locale === "ru" ? "en" : "ru";
    }
  },
  components: {
    RandomBubbles
  }
}
</script>
