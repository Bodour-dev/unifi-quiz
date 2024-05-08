import React, { useEffect, useState } from "react";
import { useStolenBikes } from "../hooks/useStolenBikes";
import { BikeProps } from "../GlobalTypes";
import { useCountStolenBikes } from "../hooks/useCountStolenBikes";


const StolenBikesList: React.FC<BikeProps> = () => {
  const [page, setPage] = useState(1);
  const [serial, setSerial] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: stolenBikes,
    isLoading,
    isError,
    error,
  } = useStolenBikes(page, searchTerm, serial);
  const { data: countStolenBikes } = useCountStolenBikes();
  let totalPages = Math.ceil(countStolenBikes / 10);

  if (isLoading) {
    return <h2>Loading...</h2> ;
  }

  if (error) {
    return (
      <h2>Somthing went wrong</h2>
    );
  }

  return <div>Stolen Bike List</div>;
};

export default StolenBikesList;
