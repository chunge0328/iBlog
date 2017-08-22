import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../components/Home'
import Main from '../components/Main'
import Categories from '../components/Categories'
import ArticleMain from '../components/ArticleMain'
import Call from '../components/Call'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/home/main',
        component: Main,
        meta: { keepAlive: true } 
      },
      {
        path: '/home/categories',
        component: Categories
      },
      {
        path: '/home/articlemain/:id',
        component: ArticleMain
      },
      {
        path: '/home/call',
        component: Call
      },
      { path: '*', redirect: '/home/main' }
    ]
  },
  { path: '*', redirect: '/' }
]
export default new VueRouter({
  routes
})
