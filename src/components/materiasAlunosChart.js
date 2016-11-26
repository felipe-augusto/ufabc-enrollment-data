import Vue from 'vue'
import MateriasAlunos from './MateriasAlunos.vue'

Vue.component('materias-alunos-chart', {
  props: {
    responseData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  template: '<canvas ref="chart" width="400" height="400"></canvas>',
  methods: {
    // usar mais tarde para gerar cores aleatórias para os gráficos
    generateRandomHexColor() {
      // uma versão um pouco modificada de https://gist.github.com/addyosmani/fd3999ea7fce242756b1
      return `#${('00000' + (~~(Math.random() * (1 << 24))).toString(16)).slice(-6)}`
    }
  },
  mounted() {
    const ctx = this.$refs.chart
    const labels = Object.keys(this.responseData)
    const data = Object.values(this.responseData)
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Matérias por Aluno',
          data,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
})

new Vue({
  components: {
    'materias-alunos-chart': MateriasAlunos
  }
})
