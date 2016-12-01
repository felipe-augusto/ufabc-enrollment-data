<template>
  <div>
    <div v-if="loading">
      Desenhando o gráfico :)
    </div>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="data">
      <mu-auto-complete label="Comece a digitar parte do nome da disciplina" :maxSearchResults="5" fullWidth labelFloat :dataSource="disciplinas" filter="caseInsensitiveFilter" v-on:input="searchTerm" />
      <div v-if="disciplina">
        <previsao-table :response-data=disciplina></previsao-table>
      </div>
    </div>
  </div>
</template>

<script>
  import pWaitFor from 'p-wait-for'
  import './previsaoTable.js'
  import dataFetching from '../mixins/dataFetching'
  export default {
    name: 'previsao',
    mixins: [dataFetching],
    data() {
      return {
        term: null,
        data: null,
        disciplina: null,
        disciplinas: []
      }
    },
    created() {
      this.fetchData('lista_disciplinas')
      pWaitFor(() => this.response !== null).then(() => {
        this.data = this.response.body
        for (const entry of this.data) {
          this.disciplinas.push(Object.values(entry)[1])
        }
        this.response = null
      })
    },
    methods: {
      searchTerm(term) {
        const id = this.getDisciplinaIdByName(term)
        this.fetchData(`previsao_disc/${id}`)
        pWaitFor(() => this.response !== null).then(() => {
          this.disciplina = this.response.body
          this.response = null
        })
      },
      getDisciplinaIdByName(name) {
        const entry = _.find(this.data, {'nome': name})
        if (entry) {
          return entry.disciplina_id
        }
      }
    }
  }
</script>

<style>
</style>
