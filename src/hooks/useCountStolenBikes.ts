import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_URL } from "../constants";

let queryURL = "location=Munich&stolenness=stolen";

const fetchCountStolenBikes = async (searchTerm?: string) => {
  const response = await axios.get(
    `${SERVER_URL}/count?${queryURL}&query=${searchTerm}`
  );
  return response.data.stolen;
};

export const useCountStolenBikes = (searchTerm: string) => {
  return useQuery(["countStolenBikes", searchTerm], () =>
    fetchCountStolenBikes(searchTerm)
  );
};
