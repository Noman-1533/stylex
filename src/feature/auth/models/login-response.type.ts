export interface LoginResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  username: string;
  accessToken: string;
  refreshToken: string;
  message?: string;
}
