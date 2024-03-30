import axiosRoot from 'axios';

export const axios = axiosRoot.create({
  baseURL: "http://172.0.0.1:9000/api",
});
