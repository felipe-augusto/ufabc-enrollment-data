<template>
  <div>
    <div v-if="loading">
      Desenhando o gráfico :)
    </div>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="response">
      <mu-paper class="chart-paper" :zDepth="3">
      <grouped-bar-chart :response-data=response.body label="Demanda Geral e por Turno"></grouped-bar-chart>
      </mu-paper>
    </div>
  </div>
</template>

<script>
  import './groupedBarChart.js'
  import routeDataFetching from '../mixins/routeDataFetching'
  export default {
    name: 'demanda-geral',
    mixins: [routeDataFetching]
  }
</script>

<style>
.chart-paper {
  margin: 20px;
}
</style>
