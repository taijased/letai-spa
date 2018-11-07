<template>
    <div class="container">
        <div class="content">
            <div class="subtitle" v-html="$t('enter_code.subtitle')"></div>
            <form class="for-mobile">
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
                    @click="$router.push('/success')"
                    >{{$t("enter_code.btn")}}</div>
            </form>
            <transition 
                name="fade"
                mode="out-in"
                :css="true"
                >
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getEnterCode: "form/getEnterCode",
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
    })
  }
};
</script>

<style lang="less">

</style>
