<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('enter_code.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input v-model="enterCode" type="number">
                    <div 
                        class="label"
                        :class="{'not-empty': enterCode !== ''}"
                    >{{$t("enter_code.input")}}</div>
                </div>
                <div 
                    class="btn-primary"
                    :class="{'btn-disabled': enterCode == '' }"
                    >{{$t("enter_code.btn")}}</div>
            </form>
            <div class="navigation">
                <span class="nav-item item-disabled" v-if="getTimer">{{$t("enter_code.navigation.resend.title") + " "+ getTimer + " " + $t("enter_code.navigation.resend.sec")}}</span>
                <span class="nav-item" v-else>{{$t("enter_code.navigation.resend.main")}}</span>
                <span class="nav-item" @click="$router.push('code-dont-send')">{{$t("enter_code.navigation.no_sms")}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getEnterCode: "form/getEnterCode",
      getTimer: "form/getTimer"
    }),
    enterCode: {
        get () {
            return this.getEnterCode;
        },
        set (val) {
            this.setEnterCode(val)
        }
    }
  },
  methods: {
    ...mapActions({
      setEnterCode: "form/setEnterCode",
      setTimer: "form/setTimer"
    })
  },
  created () {
      this.setTimer();
  }
};
</script>

<style lang="less">

</style>
