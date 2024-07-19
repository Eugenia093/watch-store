<template>
  <nav class="nav-menu">
    <router-link to="/home">Homepage</router-link>
    <br>
    <router-link to="/about">About page</router-link>
    <br>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>

  <router-view></router-view> 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ContainerComponent from './components/ContainerComponent.vue'


@Options({
  components: {
    ContainerComponent
  },
  methods: {
   
  },
  data() {
    return {
      showAllProducts: false,
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
