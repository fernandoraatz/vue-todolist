/*
|--------------------------------------------------------------------------
| Main Component - App
|--------------------------------------------------------------------------
*/

// Import Vue

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'; 

import './directives/titlevalue';

// Config Router

import { routes } from './routes/routes';
import VeeValidate, { Validator } from 'vee-validate'; 
import ValidateLang from 'vee-validate/dist/locale/pt_BR';

Vue.use(VueRouter); 
Vue.use(VueResource);
 
// Validate 

Validator.localize('pt-br', ValidateLang);
Vue.use(VeeValidate);


// Start App

new Vue({
  el: '#app',
  router: new VueRouter({routes, mode: 'history'}),
  render: h => h(App)
}) 
