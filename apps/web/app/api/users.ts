// frontend/src/services/users.ts
import { api } from "./api";

export interface CreateUserDto {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserDto {
  email?: string;
  name?: string;
  password?: string;
}

export interface UserDto {
  id: number;
  email: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export const UsersService = {
  create(dto: CreateUserDto) {
    return api.post<UserDto>("/users", dto);
  },

  list() {
    return api.get<UserDto[]>("/users");
  },

  getById(id: number) {
    return api.get<UserDto>(`/users/${id}`);
  },

  update(id: number, dto: UpdateUserDto) {
    return api.patch<UserDto>(`/users/${id}`, dto);
  },

  delete(id: number) {
    return api.delete<void>(`/users/${id}`);
  },

  profile() {
    return api.get<UserDto>("/users/profile");
  },

  changePassword(currentPassword: string, newPassword: string) {
    return api.post<{ message: string }>("/users/change-password", {
      currentPassword,
      newPassword,
    });
  },
};
