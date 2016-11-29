<template>
  <div>
    <div v-if="loading">
      Desenhando o gráfico :)
    </div>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="response">
      <info-cursos-table :response-data=response.body></info-cursos-table>
    </div>
  </div>
</template>

<script>
  import './infoCursosTable.js'
  import routeDataFetching from '../mixins/routeDataFetching'
  export default {
    name: 'info-cursos',
    mixins: [routeDataFetching]
  }
</script>

<style>
table {
  display: block;
  max-height: 90vh;
  width: 100%;
  overflow: auto;
}
tr {
  &:nth-child(2n) {
    background-color: #eee;
  }
}
th, td {
  padding: 20px;
  white-space: nowrap;
}
</style>
