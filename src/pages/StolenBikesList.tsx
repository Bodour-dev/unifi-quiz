import React from "react";
import { useStolenBikes } from "../hooks/useStolenBikes";
import Pagination from "../components/Pagination";

const StolenBikesList: React.FC = () => {
  const { data: stolenBikes, isLoading, isError } = useStolenBikes(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <Pagination currentPage={1} totalPages={10} onPageChange={(page) => {}} />
    </div>
  );
};

export default StolenBikesList;
