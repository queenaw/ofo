
<template>
  <div id="app">
    Chicked:{{$store.state.count}}times,count,{{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default{
    computed:mapGetters([
      'evenOrOdd'
    ]),
    methods:mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
  }
</script>
<style type="text/css"></style>