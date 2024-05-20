import axios, { AxiosResponse } from "axios";

export const apiServiceInstance = axios.create({
  baseURL: import.meta.env.VITE_PROXY_ENDPOINT,
});

apiServiceInstance.interceptors.response.use(
  // sends just the data body to the api service
  <T>(res: AxiosResponse<T>) => {
    return res.data;
  }
);
