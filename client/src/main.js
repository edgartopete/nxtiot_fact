/**
* 
* main.js
*
* This file constructs the vue App
*
* [created] : 11/02/2019
* [author]: ETF
*/

// Import vue framework
import Vue from 'vue'
// Import the app main component
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
