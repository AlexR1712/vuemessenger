// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MTProto from 'telegram-mtproto'
import iView from 'iview/dist/iview.min.js';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.prototype.$MTProto = MTProto

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})