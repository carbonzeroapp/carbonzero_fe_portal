import { RouteRecordRaw } from 'vue-router';
import LoginPage from 'pages/login/LoginPage.vue';
import IntroPage from 'pages/IntroPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/LoginSignupLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        components: {
          left: IntroPage,
          right: LoginPage,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
