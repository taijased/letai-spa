import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import ('./views/Index.vue')
const Success = () => import ('./components/Success.vue')

// components children components welcome
const Hello = () => import ('./components/welcome/Hello.vue')
const Welcome = () => import ('./components/welcome/Welcome.vue')
const TTKAccountLogin = () => import ('./components/welcome/TTKAccountLogin.vue')
const VoiceLogin = () => import ('./components/welcome/VoiceLogin.vue')

// components children components speedup
const Horeca = () => import ('./components/speedup/Horeca.vue')
const SpeedUp = () => import ('./components/speedup/SpeedUp.vue')
const TTKLink = () => import ('./components/speedup/TTKLink.vue')
const Another = () => import ('./components/speedup/Another.vue')

// components children components entercode
const EnterCode = () => import ('./components/entercode/EnterCode.vue')
const CodeDontSend = () => import ('./components/entercode/CodeDontSend.vue')
const NavigationEnterCode = () => import ('./components/entercode/NavigationEnterCode.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          component: Welcome,
          children: [
            {
              path: '',
              component: Hello
            },
            {
              path: '/ttk-account-login',
              component: TTKAccountLogin
            },
            {
              path: '/voice-login',
              component: VoiceLogin
            },
            {
              path: '/enter-with-code',
              component: EnterCode,
              children: [
                {
                  path: '',
                  component: NavigationEnterCode
                },
                {
                  path: '/code-dont-send',
                  component: CodeDontSend
                },
              ]
            },
          ]
        },
        {
          path: '/success',
          component: Success
        },
        {
          path: '/speedup',
          component: SpeedUp,
          children: [
            {
              path: '',
              component: Horeca
            },
            {
              path: '/ttk-link',
              component: TTKLink
            },
            {
              path: '/another',
              component: Another
            }
          ]
        },
      ]
    },
  ]
})
