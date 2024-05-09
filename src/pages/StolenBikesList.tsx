import React, { useState } from "react";
import { useStolenBikes } from "../hooks/useStolenBikes";
import Pagination from "../components/Pagination";
import { BikeProps } from "../GlobalTypes";
import { useCountStolenBikes } from "../hooks/useCountStolenBikes";
import BikeCard from "../components/BikeCard";
import { Container, Alert } from "@mui/material";
import FilterByPartialTitle from "../components/FilterByPartialTitle";
import LinearProgress from "../components/LinearProgress";

const StolenBikesList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: stolenBikes,
    isLoading,
    error,
  } = useStolenBikes(page, searchTerm);
  const { data: countStolenBikes } = useCountStolenBikes(searchTerm);
  let totalPages = Math.ceil(countStolenBikes / 10);

  const handleSearchSubmit = (searchFieldValue: string) => {
    setSearchTerm(searchFieldValue);
    setPage(1);
  };

  return (
    <>
      <div
        style={{
          height: "400px",
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
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          {error.message}
        </Alert>
      ) : (
        <Container maxWidth="md" sx={{ my: "-2.5rem", pb: "2rem" }}>
          {stolenBikes.length > 0 ? (
            stolenBikes.map((bike: BikeProps) => (
              <BikeCard key={bike.id} bike={bike} />
            ))
          ) : (
            <h2 style={{ marginTop: "5rem" }}>No Data Found!</h2>
          )}
          {countStolenBikes !== undefined && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                Total Bikes Stolen:
                <strong style={{ color: "red" }}>{countStolenBikes}</strong>
              </div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </Container>
      )}
    </>
  );
};

export default StolenBikesList;
