import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const DefaultPage = {
  path: '/',
  redirect: '/home'
};

const Home = {
  component: () => import('../views/Home'),
  path: '/home'
};

const Message = {
  component: () => import('../views/Message'),
  path: '/message'
};

const About = {
  component: () => import('../views/About'),
  path: '/about'
};

const routes = [
  DefaultPage,
  Home,
  Message,
  About,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
