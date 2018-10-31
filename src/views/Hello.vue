<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('hello.subtitle')"></div>
            <form>
                <!-- <div class="input-primary" :class="{'error': getValidPhoneNumber == false}">       -->
                <div class="input-primary">      
                    <input 
                        type="tel"
                        id="phone_number"
                        v-model="phoneNumber"
                        required>
                    <div 
                        class="label" 
                        :class="{'not-empty': phoneNumber !== ''}"
                        >{{$t("form.phone")}}</div>
                </div>
                <div 
                    class="btn-primary"
                    :class="{'btn-disabled': getValidPhoneNumber == false }"
                    @click="$router.push('/enter-with-code')">{{$t("form.btn")}}</div>
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
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getPhoneNumber: "form/getPhoneNumber",
      getValidPhoneNumber: "form/getValidPhoneNumber",
    }),
    phoneNumber: {
        get () {
            return this.getPhoneNumber;
        },
        set (val) {
            this.setPhoneNumber(val)
        }
    }
  },
  methods: {
    ...mapActions({
      setPhoneNumber: "form/setPhoneNumber"
    })
  }
};
</script>

<style lang="less">
</style>
