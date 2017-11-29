// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import {formatDate} from './common/js/date.js';
import './common/stylus/index.styl';

// Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

// router.map({
//   '/goods': {
//     components: goods
//   }
// });

// router.start(app, '#app');

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
});

// router.push('/goods');

Vue.filter('formatDate', function (value) {
  let date = new Date(value);
  return formatDate(date, 'yyyy-MM-dd hh:mm');
});
