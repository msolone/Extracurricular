import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: () => import('./views/LogIn.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/home/take_attendance',
      name: 'TakeAttendance',
      component: () => import('./views/TakeAttendance.vue'),
    },
    {
      path: '/home/team_attendance_history/',
      name: 'TeamAttendanceHistory',
      component: () => import('./views/TeamAttendanceHistory.vue'),
    }
  ],
});
