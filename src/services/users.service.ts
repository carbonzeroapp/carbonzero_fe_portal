import { BaseService } from 'src/services/base.service';

const serviceName = 'user-management';

export class UsersService extends BaseService {
  static async getCurrentUser() {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.request({ auth: true })
        .instance.get(`${serviceName}/users/me/`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
