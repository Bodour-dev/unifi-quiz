import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  createStyles,
} from "@mui/material";
import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import SearchIcon from "@mui/icons-material/Search";

const FilterByPartialTitle: React.FC<any> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleChangeSearchField = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm((event.target as HTMLInputElement).value.toLowerCase());
  };

  const handleKeyDownSearchField = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      // let searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
      onSubmit(searchTerm);
    }
  };

  return (
    <div>
      <TextField
        size="small"
        label="Search for Stolen Bike"
        variant="outlined"
        placeholder="Search By Title..."
        onChange={handleChangeSearchField}
        onKeyDown={handleKeyDownSearchField}
        InputProps={{
          endAdornment: (
            <InputAdornment onClick={() => onSubmit(searchTerm)} position="end">
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default FilterByPartialTitle;
