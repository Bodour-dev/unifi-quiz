import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_URL } from "../services/constants";

let queryURL = "location=Munich&stolenness=stolen";

const fetchCountStolenBikes = async () => {
  const response = await axios.get(`${SERVER_URL}/count?${queryURL}`);
  return response.data.proximity;
};

export const useCountStolenBikes = () => {
  return useQuery(["countStolenBikes"], () => fetchCountStolenBikes());
};
