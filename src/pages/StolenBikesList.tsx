import React, { useState } from "react";
import { useStolenBikes } from "../hooks/useStolenBikes";
import Pagination from "../components/Pagination";
import { BikeProps } from "../GlobalTypes";
import { useCountStolenBikes } from "../hooks/useCountStolenBikes";
import BikeCard from "../components/Card";
import { Container } from "@mui/material";
import FilterByPartialTitle from "../components/FilterByPartialTitle";
import Alert from "@mui/material/Alert";
import LinearWithValueLabel from "../components/LinearProgress";

const StolenBikesList: React.FC<BikeProps> = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: stolenBikes,
    isLoading,
    error,
  } = useStolenBikes(page, searchTerm);
  const { data: countStolenBikes } = useCountStolenBikes();
  let totalPages = Math.ceil(countStolenBikes / 10);

  if (isLoading) {
    return <LinearWithValueLabel />;
  }

  if (error) {
    return (
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        {error.message}
      </Alert>
    );
  }

  const handleSearchSubmit = (searchFieldValue: string) => {
    setSearchTerm(searchFieldValue);
  };

  return (
    <>
      <div
        style={{
          height: "300px",
          width: "100%,",
          backgroundColor: "aliceblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FilterByPartialTitle onSubmit={handleSearchSubmit} />
        {/* <FilterByDateRange /> */}
      </div>

      <Container maxWidth="md" sx={{ my: "-2.5rem" }}>
        {stolenBikes.length ? (
          stolenBikes.map((bike: BikeProps) => {
            return <BikeCard key={bike.id} bike={bike} />;
          })
        ) : (
          <h2>No Data Found!</h2>
        )}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </Container>
    </>
  );
};

export default StolenBikesList;
