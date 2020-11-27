import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/sleep",
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/sleep",
    component: () => import("../views/sleep.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/clock",
    component: () => import("../views/clock.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/music",
    component: () => import("../views/music.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/infor",
    component: () => import("../views/infor.vue"),
    meta: {
      keepAlive: false
    }
  },
  {
    path: "/Details",
    name: "Details",
    component: () => import("../views/Details.vue"),
    meta: {
      keepAlive: false
    }
  },
  {
    path: "/login",
    component: () => import("../views/login.vue")
  },
  {
    path:"/registered",
    component:()=>import("../views/registered.vue")
  }
]

const router = new VueRouter({
  routes
})
export default router
