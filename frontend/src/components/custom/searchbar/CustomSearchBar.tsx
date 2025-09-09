import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface CustomSearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ placeholder = "Buscar...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
    console.log("Buscando por:", query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
      fullWidth
      sx={{
        backgroundColor: "#f1f1f1",
        borderRadius: "1rem",
        "& .MuiOutlinedInput-root": {
          borderRadius: "1rem",
          "& fieldset": {
            borderColor: "#ccc",
          },
          "&:hover fieldset": {
            borderColor: "#888",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#4caf50",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#888", marginLeft: "0.5rem" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomSearchBar;
