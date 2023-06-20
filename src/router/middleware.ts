import { AuthService } from 'src/services/auth.service';
import { Notify } from 'quasar';
import { NavigationGuardNext, RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';

// eslint-disable-next-line consistent-return
export function checkAccessMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
): void {
  const isAuthRoute = to.matched.some((item: RouteRecordNormalized) => item.meta.isRequireAuth);

  // don't allow to go login page if user logged in
  if (to.name === 'login' && AuthService.getAccessToken()) return next('/');

  // if user already logged in, proceed to next route
  if (isAuthRoute && AuthService.getAccessToken()) return next();

  if (isAuthRoute) {
    Notify.create({
      type: 'negative',
      message: 'You need to sign in first',
    });

    return next({ name: 'login' });
  }

  next();
}
