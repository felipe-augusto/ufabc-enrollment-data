<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/materias_alunos">materias_alunos</router-link>

    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Olá, Relatório de Matrícula!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
