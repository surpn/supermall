import Vue from 'vue'
import VueRouter from "vue-router";

// 1.
Vue.use(VueRouter)

// 2.创建
const routes = [

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3. 导出
export default router
