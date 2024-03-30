import { axios } from ".";

export const getDranken = async () => {
  const { data } = await axios.get(`dranken`);
  return data;
};
