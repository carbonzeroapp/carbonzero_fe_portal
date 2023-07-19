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

export type ButtonSizes = 'small' | 'normal' | 'large';

export type ButtonTypes = 'primary' | 'secondary' | 'tertiary' | 'disabled';

export type AlertTypes = 'success' | 'info' | 'warning' | 'error';

export type RecordTypes = 'food' | 'transport' | 'electricity';

export interface GenderOption {
  label: string;
  value: number;
}
