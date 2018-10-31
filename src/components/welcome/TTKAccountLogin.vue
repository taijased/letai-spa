<template>
    <div class="container">
        <div class="content">
            <div class="subtitle" v-html="$t('ttk_account_login.subtitle')"></div>
            <form>
                <div class="input-primary">      
                    <input v-model="login" type="text" required>
                    <div 
                        class="label"
                        :class="{'not-empty': login !== ''}"
                        >{{$t("ttk_account_login.login_input")}}</div>
                </div>
            </form>
            <form>
                <div class="input-primary">      
                    <input v-model="password" type="password" required>
                    <div 
                        class="label"
                        :class="{'not-empty': password !== ''}"
                        >{{$t("ttk_account_login.password_input")}}</div>
                </div>
                <!-- событие при котором пройдет валидация логина и пароля то нужно активировать кнопку -->
                <div 
                    class="btn-primary"
                    :class="{'btn-disabled': password == '' && login == ''}"
                    >{{$t("enter_code.btn")}}</div>
            </form>
            <div class="navigation">
                <span class="nav-item">{{$t("ttk_account_login.navigation.get_password_and_login")}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
        login: '',
        password: ''
    };
  },
  computed: {
    ...mapGetters({
      getPhoneNumber: "form/getPhoneNumber",
      getValidPhoneNumber: "form/getValidPhoneNumber"
    }),
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
