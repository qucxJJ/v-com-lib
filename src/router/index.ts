import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ButtonDoc from '../docs/button';
import ColorDoc from '../docs/color';
import MessageDoc from '../docs/message';
import Table from '../docs/table'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: '/button'
  },
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
  {
    path: '/message',
    name: 'Message',
    component: MessageDoc,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
