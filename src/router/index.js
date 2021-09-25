import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import CustomerDetails from '../components/admin/CustomerDetails.vue'
import AddCustomer from '../components/admin/AddCustomer.vue'
import AdminLogin from '../components/admin/AdminLogin.vue'
import UpdateCustomer from '../components/admin/UpdateCustomer.vue'

const routes = [
  {
    path: '/',
    name: 'HomeComponent',
    component: HomeComponent
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    component: AdminLogin,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')){
        next('/customerdetails');
      }
      else{
        next();
      }
    }
  },
  {
    path: '/customerdetails',
    name: 'CustomerDetails',
    component: CustomerDetails,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')){
        next();
      }
      else{
        next('/adminlogin');
      }
    }
  },
  {
    path: '/addcustomer',
    name: 'AddCustomer',
    component: AddCustomer,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')){
        next();
      }
      else{
        next('/adminlogin');
      }
    }
  },
  {
    path: '/updatecustomer/:number',
    name: 'UpdateCustomer',
    component: UpdateCustomer,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('token')){
        next();
      }
      else{
        next('/adminlogin');
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
