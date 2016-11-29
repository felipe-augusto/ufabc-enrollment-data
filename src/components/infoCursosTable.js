import Vue from 'vue'

Vue.component('info-cursos-table', {
  props: {
    responseData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      rows: [],
      columnKeys: [],
      columnHeaders: ['Total de vagas · geral',
        'Total requisições · geral',
        'Gap absoluto · geral',
        'Gap relativo · geral',
        'Total vagas · matutino',
        'Total requisições · matutino',
        'Gap absoluto · matutino',
        'Gap relativo · matutino',
        'Total vagas · noturno',
        'Total requisições · noturno',
        'Gap absoluto · noturno',
        'Gap relativo · noturno'],
      rowHeaders: []
    }
  },
  template: `<div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="(header, index) in columnHeaders">
            {{ header }}
            <div>
            <i class="material-icons" @click="sort(index, 'asc')">keyboard_arrow_up</i> <i class="material-icons" @click="sort(index, 'desc')">keyboard_arrow_down</i>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cells, index) in rows">
          <th>{{ rowHeaders[index] }}</th>
          <td v-for="cell in cells">
            {{ cell }}
          </td>
        </tr>
      <tbody>
    <table>
  </div>`,
  methods: {
    sort(index, order) {
      const key = this.columnKeys[index]
      let data = this.responseData
      data = _.orderBy(data, `numeros.${key}`, [order])
      this.rowHeaders = _.map(data, 'curso')
      this.rows = _.map(data, 'numeros')
    }
  },
  created() {
    let data = this.responseData
    this.rowHeaders = _.map(data, 'curso')
    this.rows = _.map(data, 'numeros')
    const values = Object.values(this.responseData)
    this.columnKeys = Object.keys(values[0].numeros)
  }
})
