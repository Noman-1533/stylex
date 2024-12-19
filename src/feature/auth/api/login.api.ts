import apiClient from "../../shared/api/api-client";
import { LoginResponse } from "../models";
export function AuthUser(
  username: string,
  password: string,
  expiresInMins: number = 30
) {
  return apiClient.post<LoginResponse>(`https://dummyjson.com/user/login`, {
    username: username,
    password: password,
    expiresInMins: expiresInMins,
  });
}
