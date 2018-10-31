<template>
    <div class="navigation">
        <span class="nav-item item-disabled" v-if="getTimer">{{$t("enter_code.navigation.resend.title") + " "+ getTimer + " " + $t("enter_code.navigation.resend.sec")}}</span>
        <span class="nav-item" v-else>{{$t("enter_code.navigation.resend.main")}}</span>
        <span class="nav-item" @click="$router.push('code-dont-send')">{{$t("enter_code.navigation.no_sms")}}</span>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getTimer: "form/getTimer"
    })
  },
  methods: {
    ...mapActions({
      setTimer: "form/setTimer"
    })
  },
  created () {
      this.setTimer();
  }
};
</script>
