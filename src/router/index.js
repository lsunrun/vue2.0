import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Home from '@/components/home'
import Main from '@/components/main'
import AppCollection from '@/components/details/appCollection'
import ReadArticle from '@/components/details/readArticle'
import EditPublicA from '@/components/details/editPublicA'
import EditApplet from '@/components/details/editApplet'
import MiniProgram from '@/components/details/miniProgram'
import ManyArticles from '@/components/details/manyArticles'
import Searchs from '@/components/common/searchs'
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
      /**
      * 从home合辑进入显示
      */
      { path: 'AppCollection', name: 'AppCollection', component: AppCollection },
      /**
      * 从home值得读里面进入显示
      */
      { path: 'ReadArticle', name: 'ReadArticle', component: ReadArticle },
      /**
      * 从home编辑里面进入显示
      */
      { path: 'EditApplet', name: 'EditApplet', component: EditApplet },
      /**
      * 从home编辑里面进入显示
      */
      { path: 'EditPublicA', name: 'EditPublicA', component: EditPublicA },
      /**
       * 从合辑的详情里面进入显示
       */
      { path: 'MiniProgram', name: 'MiniProgram', component: MiniProgram },
      /**
      * 更多文章
      */
      { path: 'ManyArticles', name: 'ManyArticles', component: ManyArticles },
      /**
      * 搜素界面
      */
      { path: 'Searchs', name: 'Searchs', component: Searchs },

    ]
  }
]

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
