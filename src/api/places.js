import { axios } from '.';

export const getAllPlaces = async () => {
  const {
    data
  } = await axios.get('places');

  return data;
};

export const savePlace = async ({
  id,
  name,
  rating,
}) => {
  const {
    data
  } = await axios({
    method: id ? 'put' : 'post',
    url: `places/${id ?? ''}`,
    data: {
      name,
      rating
    },
  });
  return data;
};

export const deletePlace = async (id) => {
  await axios.delete(`places/${id}`);
};
