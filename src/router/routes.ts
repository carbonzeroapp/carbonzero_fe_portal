import { RouteRecordRaw } from 'vue-router';

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
    path: '/register',
    name: 'register',
    component: () => import('pages/register/RegisterPage.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { isRequireAuth: true },
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/index/IndexPage.vue'),
      }, {
        path: 'add-record/:recordTypeId',
        name: 'add-record',
        component: () => import('pages/addRecord/AddRecordPage.vue'),
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
