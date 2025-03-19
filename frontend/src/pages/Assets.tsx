import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";

const sampleAssets = [
  {
    id: 1,
    name: "Office Laptop",
    category: "Electronics",
    purchasePrice: "$2,000",
    purchaseDate: "2022-01-15",
    depreciation: "$500",
  },
  {
    id: 2,
    name: "Company Car",
    category: "Vehicle",
    purchasePrice: "$30,000",
    purchaseDate: "2020-06-20",
    depreciation: "$10,000",
  },
  {
    id: 3,
    name: "Industrial Machine",
    category: "Equipment",
    purchasePrice: "$100,000",
    purchaseDate: "2018-03-10",
    depreciation: "$40,000",
  },
  {
    id: 4,
    name: "Office Furniture",
    category: "Furniture",
    purchasePrice: "$5,000",
    purchaseDate: "2019-11-05",
    depreciation: "$1,500",
  },
];

const Assets: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredAssets = sampleAssets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === "" || asset.category === categoryFilter)
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Asset Management
      </Typography>

      {/* Search and Filter */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search Assets"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Filter by Category</InputLabel>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Vehicle">Vehicle</MenuItem>
              <MenuItem value="Equipment">Equipment</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button fullWidth variant="contained" color="primary">
            + Add Asset
          </Button>
        </Grid>
      </Grid>

      {/* Assets Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Purchase Price</TableCell>
              <TableCell>Purchase Date</TableCell>
              <TableCell>Depreciation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAssets.length > 0 ? (
              filteredAssets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.category}</TableCell>
                  <TableCell>{asset.purchasePrice}</TableCell>
                  <TableCell>{asset.purchaseDate}</TableCell>
                  <TableCell>{asset.depreciation}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No assets found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Assets;
