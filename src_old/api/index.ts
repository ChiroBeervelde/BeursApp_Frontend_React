import axiosRoot from "axios";

export const axios = axiosRoot.create({
  baseURL: "http://localhost:9000/api",
});


