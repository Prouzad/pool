import { api } from "@/services";

const API_USER_ME_INFO = "/users/me";

export type UserMeResponse = {
  id: number;
  email: string;
  is_active: boolean;
  is_verified: boolean;
};

export const getUserInfo = async ({
  token,
  lang,
}: {
  token: string;
  lang: string;
}) => {
  const { data } = await api.get<UserMeResponse>(API_USER_ME_INFO, {
    headers: {
      "x-access-token": `${token}`,
      "Accept-Language": lang,
    },
  });

  return data;
};
