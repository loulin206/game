import Vue from 'vue'
import Router from 'vue-router'
import game from '../components/game'
import end from '../components/end'
import start from '../components/start'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/end',
      name: 'end',
      component:end
    }
  ]
})
