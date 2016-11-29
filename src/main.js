import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import Chart from 'chart.js'
import _ from 'lodash'

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

const ChutesInevitaveis = resolve => {
  require.ensure(['./components/ChutesInevitaveis.vue'], () => {
    resolve(require('./components/ChutesInevitaveis.vue'))
  })
}

const DemandaGeral = resolve => {
  require.ensure(['./components/DemandaGeral.vue'], () => {
    resolve(require('./components/DemandaGeral.vue'))
  })
}

const InfoCursos = resolve => {
  require.ensure(['./components/InfoCursos.vue'], () => {
    resolve(require('./components/InfoCursos.vue'))
  })
}

const router = new VueRouter({
  routes: [
    { path: '/materias_alunos', component: MateriasAlunos },
    { path: '/chutes_inevitaveis', component: ChutesInevitaveis },
    { path: '/demanda_geral', component: DemandaGeral },
    { path: '/info_all_cursos', component: InfoCursos }
  ]
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  data: { host: 'http://desolate-lake-30493.herokuapp.com/stats/' }
})
