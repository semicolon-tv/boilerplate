<template>
  <div id="app">
    <Playground />
  </div>
</template>

<script>
import Playground from './components/Playground.vue';

export default {
  name: 'App',
  components: {
    Playground,
  },
};
</script>

<style>
html {
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
