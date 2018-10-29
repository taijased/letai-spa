import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import ('./views/Index.vue')
const Hello = () => import ('./views/Hello.vue')
const EnterCode = () => import ('./views/EnterCode.vue')
const CodeDontSend = () => import ('./views/CodeDontSend.vue')
const VoiceLogin = () => import ('./views/VoiceLogin.vue')
const TTKAccountLogin = () => import ('./views/TTKAccountLogin.vue')
const Success = () => import ('./views/Success.vue')
const Horeca = () => import ('./views/Horeca.vue')
const TTKLink = () => import ('./views/TTKLink.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          component: Hello
        },
        {
          path: 'enter-with-code',
          component: EnterCode
        },
        {
          path: 'code-dont-send',
          component: CodeDontSend
        },
        {
          path: 'voice-login',
          component: VoiceLogin
        },
        {
          path: 'ttk-account-login',
          component: TTKAccountLogin
        },
        {
          path: 'success',
          component: Success
        },
        {
          path: 'horeca',
          component: Horeca
        },
        {
          path: 'ttk-link',
          component: TTKLink
        }
      ]
    },
  ]
})
