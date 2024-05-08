import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { SERVER_URL } from "../services/constants";

let queryURL = "location=Munich&stolenness=stolen&per_page=10";

// proximity is correct without serial & query :31
// stolenness stolen case return  ("status": "stolen", "stolen": true) these params incorrect values
// 18.66.192.93 even when i used this ip from geo location,return incorrect response

const fetchStolenBikes = async (
  page: number,
  searchTerm?: string
) => {
  let response;
  // if (serial == "") {
    response = await axios.get(
      `${SERVER_URL}?${queryURL}&page=${page}&query=${searchTerm}`
    );
  // }
  // else {
  //   response = await axios.get(
  //     `${SERVER_URL}/serials_containing?${queryURL}&page=${page}&query=${searchTerm}&serial=${serial}`
  //   );
  // }
  return response.data.bikes;
};

export const useStolenBikes = (
  page: number,
  searchTerm: string,
  serial: string
) => {
  return useQuery({
    queryKey: ["stolenBikes", page, searchTerm],
    queryFn: () => fetchStolenBikes(page, searchTerm),
    onError: (err: AxiosError) => {
      console.log('ERR:', err.response?.status);
    },
  });
};
