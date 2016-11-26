<template>
  <div>
    <div v-if="loading">
      Desenhando o gráfico :)
    </div>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="response">
      <!--<p>{{ response.body }}</p>-->
      <mu-paper class="chart-paper" :zDepth="3">
      <materias-alunos-chart :response-data=response.body></materias-alunos-chart>
      </mu-paper>
    </div>
  </div>
</template>

<script>
  import './materiasAlunosChart.js'
  export default {
    name: 'materias-alunos',
    data() {
      return {
        loading: false,
        response: null,
        error: null
      }
    },
    created() {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.error = this.response = null
        this.loading = true
        // console.log(this.$root.host)
        this.$http.get(`${this.$root.host}${this.$route.path}`).then(res => {
          this.loading = false
          this.response = res
          // console.log(res.body)
        }, err => {
          this.loading = false
          this.error = err.toString()
          // console.log(err)
        })
      }
    }
  }
</script>

<style>
.chart-paper {
  margin: 20px;
}
</style>
