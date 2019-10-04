import axios from "axios";

export const axiosInstance = axios.create({
  timeout: 10000,
});

export const setAxiosAuthToken = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAxiosAuthToken = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};
