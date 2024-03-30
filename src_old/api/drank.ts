import { axios } from ".";

export const getDranken = async () => {
  console.log('here')
  const { data } = await axios.get(`dranken`);
  return data;
};
