import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import Chart from 'chart.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MuseUI)

// Lazy Loading para carregar um componente só quando visitamos sua rota
const MateriasAlunos = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['./components/MateriasAlunos.vue'], () => {
    resolve(require('./components/MateriasAlunos.vue'))
  })
}

const router = new VueRouter({
  routes: [
    { path: '/materias_alunos', component: MateriasAlunos }
  ]
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  data: { host: 'http://desolate-lake-30493.herokuapp.com/stats/' }
})
