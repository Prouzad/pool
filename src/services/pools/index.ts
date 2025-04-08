import { api } from "@/services";
import { API_ROUTE_ALL_POOLS, API_ROUTE_POOLS } from "@/services/apiRoutes";
import { AllPoolsResponse, Pools } from "@/services/pools/_types";

export const getAllPools = async ({
  token,
  lang = "ru",
}: {
  token: string;
  lang?: string;
}) => {
  try {
    const { data } = await api.get<AllPoolsResponse[]>(API_ROUTE_ALL_POOLS, {
      headers: {
        "x-access-token": `${token}`,
        "Accept-Language": lang,
      },
    });
    return data;
  } catch (error) {
    console.error("Error during get all pools:", error);
    throw error;
  }
};

export const getMePools = async ({
  token,
  lang = "ru",
}: {
  token: string;
  lang?: string;
}) => {
  const { data } = await api.get<Pools[]>(API_ROUTE_POOLS, {
    headers: {
      "x-access-token": `${token}`,
      "Accept-Language": lang,
    },
  });
  return data;
};

export const createMyPool = ({
  token,
  data,
  lang = "ru",
}: {
  token: string;
  data: {
    pool_id: number;
    amount: number;
  };
  lang?: string;
}) => {
  try {
    const res = api.post(API_ROUTE_POOLS, data, {
      headers: {
        "x-access-token": `${token}`,
        "Accept-Language": lang,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
