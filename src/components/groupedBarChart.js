import Vue from 'vue'

Vue.component('grouped-bar-chart', {
  props: {
    label: {
      type: String,
      default: ''
    },
    responseData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  template: '<canvas ref="chart" width="400" height="400"></canvas>',
  methods: {
    generateRandomHexColor() {
      // uma versão um pouco modificada de https://gist.github.com/addyosmani/fd3999ea7fce242756b1
      return `#${('00000' + (~~(Math.random() * (1 << 24))).toString(16)).slice(-6)}`
    }
  },
  mounted() {
    const ctx = this.$refs.chart
    const labels = Object.keys(this.responseData)
    const values = Object.values(this.responseData)
    const groups = []
    for (const value of values) {
      groups.push(Object.values(value))
    }
    const data = _.zip(...groups)
    const label = this.label
    const dataLabels = Object.keys(values[0])
    const datasets = []
    for (let i = 0; i < groups.length; i++) {
      datasets.push({
        label: dataLabels[i],
        backgroundColor: this.generateRandomHexColor(),
        data: data[i]
      })
    }
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets
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
