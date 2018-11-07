<template>
    <div class="container">
        <div class="content">
            <div class="title" v-html="$t('hello.title')"></div>
            <div class="subtitle" v-html="$t('horeca.subtitle')"></div>
            <form class="for-mobile">
                <div class="input-primary">      
                    <input v-model="newData" type="text" required>
                    <div 
                        class="label"
                        :class="{'not-empty': newData !== ''}"
                    >{{$t("horeca.input")}}</div>
                </div>
                <div 
                    class="btn-primary"
                    :class="{'btn-disabled': newData == '' }"
                >{{$t("horeca.btn_change")}}</div>
            </form>
            <div class="subtitle" v-html="$t('horeca.second_subtitle')"></div>
            <transition 
                    name="fade" 
                    mode="out-in"
                    :css="true">
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
      getNewData: "form/getNewData",
    }),
    newData: {
        get () {
            return this.getNewData;
        },
        set (val) {
            this.setNewData(val)
        }
    }
  },
  methods: {
    ...mapActions({
      setNewData: "form/setNewData",
    })
  }
};
</script>