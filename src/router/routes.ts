import { RouteRecordRaw } from 'vue-router';
import LoginPage from 'pages/login/LoginPage.vue';
import IntroPage from 'pages/IntroPage.vue';
import RegisterPage from 'pages/register/RegisterPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/onboarding',
    name: 'onboarding',
    component: () => import('pages/onboarding/OnboardingPage.vue'),
  },
  {
    path: '/get-started',
    name: 'get-started',
    component: () => import('pages/getStarted/GetStartedPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login/LoginPage.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { isRequireAuth: true },
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/LoginSignupLayout.vue'),
    children: [
      // {
      //   path: 'login',
      //   name: 'login',
      //   component: () => import('pages/login/LoginPage.vue'),
      // },
      {
        path: 'register',
        name: 'register',
        components: {
          left: IntroPage,
          right: RegisterPage,
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
