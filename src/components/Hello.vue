<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <mu-appbar :title=heading>
      <mu-icon-button icon="menu" slot="left" @click="toggle(true)" />
      <mu-icon-button icon="expand_more" slot="right" />
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-appbar title="" />
      <mu-list @itemClick="docked ? '' : toggle()">
        <router-link to="/">
          <mu-list-item title="Página Inicial" />
        </router-link>
        <router-link to="/materias_alunos">
          <mu-list-item title="Matérias por aluno" />
        </router-link>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close" />
      </mu-list>
    </mu-drawer>

    <router-view class="view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        heading: 'Relatório de Matrícula',
        open: false,
        docked: true
      }
    },
    methods: {
      toggle(flag) {
        this.open = !this.open
        this.docked = !flag
      }
    }
  }
</script>

<style scoped>
</style>
