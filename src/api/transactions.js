import { axios } from '.';

export const getAllTransactions = async () => {
  const { data } = await axios.get(
    'transactions',
    {
      params: {
        limit: 25,
        offset: 0,
      }
    }
  );
  return data;
};

export const saveTransaction = async ({
  id,
  placeId,
  amount,
  date,
  user,
}) => {
  const { data } = await axios({
    method: id ? 'put' : 'post',
    url: `transactions/${id ?? ''}`,
    data: {
      placeId,
      amount,
      date,
      user,
    },
  });
  return data;
};

export const deleteTransaction = async (id) => {
  await axios.delete(`transactions/${id}`);
};
