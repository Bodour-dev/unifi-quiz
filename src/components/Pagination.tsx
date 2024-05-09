import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { PaginationProps } from "../GlobalTypes";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={(e, page) => onPageChange(page)}
      variant="outlined"
      shape="rounded"
      color="primary"
      sx={{ mt: "2rem", mb: "4rem", display: "flex", justifyContent: "center" }}
    />
  );
};

export default Pagination;