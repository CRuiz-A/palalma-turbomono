// frontend/src/services/auth.ts
import { api } from "./api";

export interface LoginDto {
  username: string;
  password: string;
}
export interface RegisterDto {
  email: string;
  username: string;
  password: string;
}
export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export const AuthService = {
  register(dto: RegisterDto) {
    return api.post<TokenPair>("/auth/register", dto);
  },
  login(dto: LoginDto) {
    return api.post<TokenPair>("/auth/login", dto);
  },
  refresh(refreshToken: string) {
    return api.post<{ accessToken: string }>("/auth/refresh", { refreshToken });
  },
  profile() {
    return api.get("/auth/profile");
  },
  logout() {
    return api.post("/auth/logout");
  },
};
