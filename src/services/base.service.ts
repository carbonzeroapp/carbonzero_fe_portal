import { RequestStatus } from 'src/types';
import { Http } from 'src/services/http.init';

export class BaseService {
  static request(requestData: RequestStatus = { auth: false }) {
    return new Http(requestData);
  }
}
