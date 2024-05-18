import axios, { AxiosError, AxiosResponse } from "axios";

export const apiServiceInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

apiServiceInstance.interceptors.response.use(
  // sends just the data body to the api service
  <T>(res: AxiosResponse<T>) => {
    return res.data;
  },
  (err: AxiosError) => {
    return err.message;
  }
);
