import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ButtonDoc from '../docs/button';
import ColorDoc from '../docs/color';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: '/button',
    name: 'Button',
    component: ButtonDoc,
  },
  {
    path: '/color',
    name: 'Color',
    component: ColorDoc,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
