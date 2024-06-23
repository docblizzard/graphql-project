import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../components/Page/Dashboard/DashboardComponent.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import store from '@/store/vuex'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: Dashboard,
          meta: { requiresAuth: true },
        },  
      ]
    },
    {
      path:'/login',
      name:'login',
      component: LoginPage,
      meta: { requiresGuest: true }
    },
    {
    path:'/register',
    name:'register',
    component:RegisterPage,
    meta: { requiresGuest: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated = store.state.isAuthenticated;
    if (!isAuthenticated) {
      console.log("not logged");
      next({ name: 'login' });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    const isAuthenticated = store.state.isAuthenticated;

    if (isAuthenticated) {
      console.log("already logged in");
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router