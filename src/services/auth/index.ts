import { api } from "@/services";
import axios from "axios";

const API_USERS = "/users";
const API_USERS_REGISTER = `${API_USERS}/register/`;

const API_AUTH_JWT = "/auth/jwt";
const API_AUTH_JWT_ACCESS = `${API_AUTH_JWT}/access/`;
const API_AUTH_JWT_REFRESH = `${API_AUTH_JWT}/refresh/`;

type SignUpProps = {
  email: string;
  password: string;
  lang?: string;
};

export const signUp = async ({ email, password, lang }: SignUpProps) => {
  try {
    const { data } = await api.post(
      API_USERS_REGISTER,
      {
        email,
        password,
      },
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error during sign up:", error);
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || "Unknown error"
      : "Unexpected error";
    return Promise.reject(errorMessage);
  }
};

// type AuthResponse = {
//   access_token: string;
//   access_token_expires: string; // ISO date string
//   refresh_token: string;
//   refresh_token_expires: string; // ISO date string
// };

export const signIn = async ({ email, password, lang }: SignUpProps) => {
  try {
    const data = await api.post(
      API_AUTH_JWT_ACCESS,
      {
        email,
        password,
      },
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};

export const refreshToken = async (refreshToken: string) => {
  try {
    const { data } = await api.post(API_AUTH_JWT_REFRESH, refreshToken);
    return data;
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error;
  }
};
