import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// import 'vue-tsx-support/enable-check';
import './components/theme-chalk/index.less';
import { MessageUtil } from './components/message/main';

Vue.prototype.$Message =  MessageUtil;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
