export interface RequestStatus {
  auth: boolean
}

export interface LoginFields {
  username: string,
  password: string
}

export interface RegisterFields {
  full_name: string,
  username: string,
  email: string,
  gender: number,
  date_of_birth: string,
  password: string,
  password2: string,
}

export type AlertTypes = 'success' | 'info' | 'warning' | 'error';

export interface GenderOption {
  label: string;
  value: number;
}
