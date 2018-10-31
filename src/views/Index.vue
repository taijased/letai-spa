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
                <transition name="fade">
                    <router-view/>
                </transition>
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
<style lang="less">
.fade-enter-active, .fade-leave-active {
  	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.fade-enter, .fade-leave-to {
  	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

</style>

