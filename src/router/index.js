import Vue from 'vue';
import Router from 'vue-router';
import Option from '@/components/Option';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Option',
      component: Option,
    },
  ],
});
