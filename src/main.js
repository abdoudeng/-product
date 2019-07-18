import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import jquery from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/css/elegant_font.css'
import './assets/css/ionicons.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/plugins.css'
import './assets/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$ = jquery
var router = new VueRouter({
  routes
})
router.beforeEach((to, from ,next)=>{
  const hasToken = getToken()
  console.log(hasToken)
  // next()
  if(hasToken){
    if(to.path === '/login'){
      next({path:'/'})
    }else{
      next()
    }
  }else if(to.path === '/login'){
    next()
  }else{
    next(`/login?redirect=${to.path}`)
  } 
})
new Vue({
  router,
  render: h => h(App),
}).$mount('.app')



function getToken(){
    let usertoken =  window.localStorage.getItem('user')
    return usertoken
  }
