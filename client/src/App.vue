<!--
* 
* FactService.js
*
* This file declare the app and components render area 
*
* [created] : 11/02/2019
* [author]: ETF
-->
<template>
  <div id="app">
    <factComp/>
  </div>
</template>

<script>
// Import the list component to be render
import factComp from './components/fact.vue'
// Export the app object
export default {
  name: 'app',
  components: {
    factComp
  }
}
</script>
<!--import css for the app-->
<style>
  @import './assets/css/app.css';
</style>
