import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Home from '@/components/home'
import Main from '@/components/main'
import AppCollection from '@/components/details/appCollection'
import $ from 'jquery'
import './cssExport'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Router)


const routes = [
  {
    /**
     * 重定向到子页面home
     */
    path: '/', name: 'Main', component: Main, redirect: 'Home',
    children: [
      { path: 'Home', name: 'Home', component: Home },
      { path: 'AppCollection', name: 'AppCollection', component: AppCollection },
    ]
  }


  //   { path: 'AppCollection', name: 'AppCollection', component: AppCollection },
  // ]},
  // {
  //   path: '/Home', name: 'Home', component: Home,
  //   children: [
  //     { path: 'AppCollection', name: 'AppCollection', component: AppCollection },
  //   ]
  // },

]



export default new Router({ routes })
