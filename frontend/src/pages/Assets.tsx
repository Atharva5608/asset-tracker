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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SelectChangeEvent,
} from "@mui/material";

const initialAssets = [
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
  const [assets, setAssets] = useState(initialAssets);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [open, setOpen] = useState(false);

  // Form States
  const [newAsset, setNewAsset] = useState({
    name: "",
    category: "",
    purchasePrice: "",
    purchaseDate: "",
    depreciation: "",
  });

  // Handle opening and closing the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setNewAsset({
      name: "",
      category: "",
      purchasePrice: "",
      purchaseDate: "",
      depreciation: "",
    });
    setOpen(false);
  };

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewAsset((prev) => ({ ...prev, [name]: value }));
  };

  // Handle dropdown change (Fix applied here)
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setNewAsset((prev) => ({ ...prev, category: e.target.value }));
  };

  // Handle adding new asset
  const handleAddAsset = () => {
    if (
      !newAsset.name ||
      !newAsset.category ||
      !newAsset.purchasePrice ||
      !newAsset.purchaseDate ||
      !newAsset.depreciation
    ) {
      alert("Please fill all fields.");
      return;
    }

    setAssets([...assets, { id: assets.length + 1, ...newAsset }]);
    handleClose();
  };

  // Filtered assets
  const filteredAssets = assets.filter(
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
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

      {/* Add Asset Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Asset</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Asset Name"
            name="name"
            variant="outlined"
            sx={{ mt: 2 }}
            value={newAsset.name}
            onChange={handleInputChange}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={newAsset.category}
              onChange={handleSelectChange}
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Vehicle">Vehicle</MenuItem>
              <MenuItem value="Equipment">Equipment</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Purchase Price"
            name="purchasePrice"
            variant="outlined"
            sx={{ mt: 2 }}
            value={newAsset.purchasePrice}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            type="date"
            label="Purchase Date"
            name="purchaseDate"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            sx={{ mt: 2 }}
            value={newAsset.purchaseDate}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Depreciation"
            name="depreciation"
            variant="outlined"
            sx={{ mt: 2 }}
            value={newAsset.depreciation}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleAddAsset} color="primary">
            Add Asset
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Assets;
