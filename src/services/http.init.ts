import { api } from 'boot/axios';
import { AxiosInstance } from 'axios';
import { RequestStatus } from 'src/types';
import { AuthService } from 'src/services/auth.service';

export class Http {
  private readonly isAuth: boolean;

  public instance: AxiosInstance;

  constructor(requestStatus: RequestStatus) {
    // if auth == true means that this request needs authentication
    this.isAuth = requestStatus && requestStatus.auth ? requestStatus.auth : false;
    this.instance = api;

    this.init();
  }

  init() {
    if (this.isAuth) {
      this.instance.interceptors.request.use(
        (request) => {
          request.headers.Authorization = `Bearer ${AuthService.getAccessToken()}`;
          return request;
        },
        (error) => Promise.reject(error),
      );

      this.instance.interceptors.response.use(
        (response) => response,
        async (error) => {
          const originalRequest = error.config;

          if (error.response.status === 401) {
            if (AuthService.getRefreshToken()) {
              try {
                const refreshTokenRes = await AuthService.refreshToken();

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                originalRequest.headers.Authorization = `Bearer ${refreshTokenRes.data.access}`;

                return this.instance(originalRequest);
              } catch { /* empty */ }
            }
            AuthService.logout();
          }
          return Promise.reject(error);
        },
      );
    }
  }
}
