import axios from 'axios';
import { API_URL } from 'src/constants';
import { LoginFields, RegisterFields } from 'src/types';
import { ErrorWrapper, ResponseWrapper } from 'src/services/utils';
import Router from 'src/router';
import { Notify } from 'quasar';

export class AuthService {
  static async login({ username, password }: LoginFields) {
    try {
      const response = await axios
        .post(`${API_URL}user-management/auth/login/`, {
          username, password,
        });

      AuthService.setAccessToken(response.data.access);
      AuthService.setRefreshToken(response.data.refresh);

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async register({
    // eslint-disable-next-line camelcase
    full_name, username, email, gender, date_of_birth, password, password2,
  }
    : RegisterFields) {
    try {
      const response = await axios
        .post(`${API_URL}user-management/auth/registration/`, {
          // eslint-disable-next-line camelcase
          full_name, username, email, gender, date_of_birth, password, password2,
        });

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  static async refreshToken() {
    try {
      const response = await axios
        .post(`${API_URL}user-management/auth/token/refresh/`, {
          refresh: AuthService.getRefreshToken(),
        });

      AuthService.setAccessToken(response.data.access);

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      throw new ErrorWrapper(error);
    }
  }

  /**
   * Save/replace the access token in the local storage
   * @param token
   */
  static setAccessToken(token: string): void {
    localStorage.setItem('access', token);
  }

  /**
   * Save/replace the refresh token in the local storage
   */
  static setRefreshToken(token: string): void {
    localStorage.setItem('refresh', token);
  }

  /**
   * Retrieve the token from the local storage
   */
  static getAccessToken(): string | null {
    return localStorage.getItem('access');
  }

  /**
   * Retrieve the refresh token from the local storage
   */
  static getRefreshToken(): string | null {
    return localStorage.getItem('refresh');
  }

  /**
   * Remove the token from the local storage
   */
  static resetAccessToken(): void {
    AuthService.setAccessToken('');
  }

  /**
   * Remove the refresh token from the local storage
   */
  static resetRefreshToken(): void {
    AuthService.setRefreshToken('');
  }

  /**
   * Remove the authentication token
   */
  static resetAuthToken(): void {
    AuthService.resetAccessToken();
    AuthService.resetRefreshToken();
  }

  /**
   * Log out the user
   */
  static logout(): void {
    AuthService.resetAuthToken();
    Router.push({ name: 'login' });
    Notify.create({
      type: 'info',
      message: 'You have been logged out',
    });
  }
}
