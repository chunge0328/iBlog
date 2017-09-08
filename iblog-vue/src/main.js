// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import filters from './filters'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

Object.keys(filters).forEach( key => Vue.filter(key,filters[key]))

new Vue({
  el: '#app',
  router
})
