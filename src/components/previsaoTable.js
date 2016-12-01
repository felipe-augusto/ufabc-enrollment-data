import Vue from 'vue'

Vue.component('previsao-table', {
  props: {
    responseData: null
  },
  template: `<div v-if="responseData">
    <h2>{{ responseData.nome }}</h2>
    <ul>
      <li>Vagas: {{ responseData.vagas }}</li>
      <li>Requisições: {{ responseData.requisicoes }}</li>
      <li>Quantidade de alunos usando a extensão que solicitaram matrícula nesta disciplina: {{ responseData.extensao }}</li>
      <li>Posição do aluno com solicitação indeferida, considerando os usuários da extensão que solicitaram matrícula nesta disciplina: {{ responseData.posicao }}</li>
      <li>Critério de corte: {{ responseData.criterio | upperCase }}</li>
      <span v-if="responseData.corte">
        <li>O aluno com solicitação indeferida tem reserva de vaga? {{ responseData.corte.reserva ? 'Sim' : 'Não' }}</li>
        <li>CP do aluno com solicitação indeferida: {{ responseData.corte.cp }}</li>
        <li>CR do aluno com solicitação indeferida: {{ responseData.corte.cr }}</li>
        <li>IK do aluno com solicitação indeferida: {{ responseData.corte.ik }}</li>
      </span>
    </ul>
  </div>`,
  filters: {
    upperCase: str => {
      if (str) {
        return str.toUpperCase()
      }
    }
  }
})
