import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Home from '@/components/Home'
import $ from 'jquery'
import  './cssExport'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(ElementUI)
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]



export default new Router({ routes })
