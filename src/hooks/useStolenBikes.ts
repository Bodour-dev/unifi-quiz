import { useQuery } from 'react-query';
import axios from 'axios';

const fetchStolenBikes = async (page: number) => {
//   const response = await axios.get(`serverurl`);
//   return response.data.results;
};

export const useStolenBikes = (page: number) => {
  return useQuery(['stolenBikes', page], () => fetchStolenBikes(page));
};

