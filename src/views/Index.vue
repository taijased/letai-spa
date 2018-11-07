<template>
    <div class="wrapper">
        <header>
            <img class="logo" src="../assets/logo.svg" @click="$router.push('/')" alt="tattelecom">
            <div class="internationalization noselect" @click="setLocalization()">{{$t("internationalization.title")}}</div>
        </header>
        <main>
            <aside class="aside-left">
                <!-- <img class="macbook" src="../assets/macbook.svg" alt="macbook"> -->
                <RandomBubbles/>
            </aside>
            <aside class="aside-right">
                <transition 
                    name="fade"
                    mode="out-in"
                    :css="true">
                    <router-view/>
                </transition>
            </aside>
        </main>
        <footer>
            <div>{{$t("hello.footer")}}</div>
            <span>powered by <a href="http://tim.agency">tim.agency</a></span>
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

