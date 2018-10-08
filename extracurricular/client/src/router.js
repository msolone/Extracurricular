import Vue from 'vue';
import Router from 'vue-router';
import Callback from './views/Callback.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',

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
      path: '/home/take_attendance/:TeamId',
      name: 'TakeAttendance',
      component: () => import('./views/TakeAttendance.vue'),
    },
    {
      path: '/home/team_attendance_history/:TeamId',
      name: 'TeamAttendanceHistory',
      component: () => import('./views/TeamAttendanceHistory.vue'),
    },
    {
      path: '/home/player_attendance_history/:playerId',
      name: 'PlayerAttendanceHistory',
      component: () => import('./views/PlayerAttendanceHistory.vue'),
    },
    {
      path: '/home/add_team/',
      name: 'AddTeam',
      component: () => import('./views/AddTeam.vue'),
    },
    {
      path: '/home/add_player/',
      name: 'AddPlayer',
      component: () => import('./views/AddPlayer.vue'),
    },
    {
      path: '/home/remove_team/',
      name: 'RemoveTeam',
      component: () => import('./views/RemoveTeam.vue'),
    },
    {
      path: '/home/remove_player/',
      name: 'RemovePlayer',
      component: () => import('./views/RemovePlayer.vue'),
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    }
  ],
});
