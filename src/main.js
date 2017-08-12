// ruhkoujs
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
// let app = Vue.extend(App);
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import './common/stylus/index.styl';
// const goods = { template: '<div>foo</div>' };

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

const routes = [
	{path: '/goods', component: goods},
	{path: '/ratings', component: ratings},
	{path: '/seller', component: seller}
];

const router = new VueRouter({
	linkActiveClass: 'active',
	routes
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

// router.go('/ratings');
// let app = Vue.extend(App);
// const router = new VueRouter({
// 	routes: [{
// 		path: '/goods', component: goods
// 	}]
// });
// router.map({
// 	'/goods': {
// 		component: goods
// 	}
// });
// new Vue({
// 	router
// }).$mount('#app');
// router.start(app, '#app');
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });