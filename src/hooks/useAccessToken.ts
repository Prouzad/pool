import { useSession } from "next-auth/react";

export const useAccessToken = () => {
  const { data: session } = useSession();
  const token = session?.user.token.accessToken as string;
  return token;
};
