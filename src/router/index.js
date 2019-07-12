import Vue from 'vue';
import Router from 'vue-router';
import Todolist from '@/components/Todolist';
import Analytics from '@/components/Analytics';
import Ringtones from '@/components/Ringtones';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todolist',
      component: Todolist,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics,
    },
    {
      path: '/ringtones',
      name: 'Ringtones',
      component: Ringtones,
    },
  ],
});
