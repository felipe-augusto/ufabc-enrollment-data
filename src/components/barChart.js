import Vue from 'vue'

Vue.component('bar-chart', {
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
    const data = Object.values(this.responseData)
    const label = this.label
    const backgroundColor = []
    for (const datum of data) {
      backgroundColor.push(this.generateRandomHexColor())
    }
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label,
          data,
          backgroundColor
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
