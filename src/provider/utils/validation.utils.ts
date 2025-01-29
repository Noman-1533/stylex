import apiClient from "../../feature/shared/api/api-client";

const jwtDecode = (token: string) => {
  const [payload] = token.split(".").slice(1, 2);
  return JSON.parse(atob(payload));
};
export const isValidToken = (token: string) => {
  if (!token) return false;
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

export const setSession = (
  accessToken: string | null,
  refreshToken: string | null
) => {
  if (accessToken && refreshToken) {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
    apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    delete apiClient.defaults.headers.common.Authorization;
  }
};
