import React, { useEffect, useState } from "react";
import { useStolenBikes } from "../hooks/useStolenBikes";
import Pagination from "../components/Pagination";
import { BikeProps } from "../GlobalTypes";
import { useCountStolenBikes } from "../hooks/useCountStolenBikes";
import BikeCard from "../components/Card";
import { Container, Grid } from "@mui/material";
import FilterByPartialTitle from "../components/FilterByPartialTitle";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LinearWithValueLabel from "../components/LinearProgress";

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
    <div>
      <div
        style={{
          height: "300px",
          width: "100%,",
          backgroundColor: "aliceblue",
          paddingTop: "2rem",
        }}
      >
        <Typography variant="h2">Search for Stolen Bike</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <FilterByPartialTitle onSubmit={handleSearchSubmit} />
          {/* <FilterByDateRange /> */}
        </div>
      </div>

      <Container maxWidth="md" sx={{ my: "-2.5rem" }}>
        {/* <Grid container rowSpacing={1}  columnSpacing={{ xs: 1}}> */}
        {/* <Grid item xs={12}> */}
        {stolenBikes.length ? (
          stolenBikes.map((bike: BikeProps) => {
            return <BikeCard key={bike.id} bike={bike} />;
          })
        ) : (
          <h2>No Data Found!</h2>
        )}
        {/* </Grid> */}

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </Container>
    </div>
  );
};

export default StolenBikesList;
