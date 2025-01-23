import apiClient from "../../shared/api/api-client";
import { LoginResponse } from "../models";
export async function AuthUser(
  username: string,
  password: string,
  expiresInMins: number = 30
) {
  return await apiClient.post<LoginResponse>(`user/login`, {
    username: username,
    password: password,
    expiresInMins: expiresInMins,
  });
}
