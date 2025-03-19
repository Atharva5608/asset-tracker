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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { saveAs } from "file-saver";

const assets = [
  {
    id: 1,
    name: "Office Laptop",
    purchasePrice: 2000,
    usefulLife: 5,
    method: "Straight-line",
  },
  {
    id: 2,
    name: "Company Car",
    purchasePrice: 30000,
    usefulLife: 10,
    method: "Reducing Balance",
  },
  {
    id: 3,
    name: "Industrial Machine",
    purchasePrice: 100000,
    usefulLife: 15,
    method: "Straight-line",
  },
];

const calculateDepreciation = (assetId: number) => {
  const asset = assets.find((a) => a.id === assetId);
  if (!asset) return [];

  const { purchasePrice, usefulLife, method } = asset;
  const schedule = [];
  let remainingValue = purchasePrice;

  for (let year = 1; year <= usefulLife; year++) {
    let depreciation =
      method === "Straight-line"
        ? purchasePrice / usefulLife
        : remainingValue * 0.2; // 20% reducing balance

    remainingValue -= depreciation;
    if (remainingValue < 0) remainingValue = 0;

    schedule.push({
      year,
      depreciation: depreciation.toFixed(2),
      remainingValue: remainingValue.toFixed(2),
    });
  }

  return schedule;
};

const DepreciationSchedule: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<number | "">("");
  const depreciationData =
    selectedAsset !== "" ? calculateDepreciation(selectedAsset) : [];

  const downloadCSV = () => {
    if (depreciationData.length === 0) return;

    let csvContent = "Year,Depreciation,Remaining Value\n";
    depreciationData.forEach(({ year, depreciation, remainingValue }) => {
      csvContent += `${year},${depreciation},${remainingValue}\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "depreciation_schedule.csv");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Depreciation Schedule
      </Typography>

      {/* Asset Selection */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Select Asset</InputLabel>
        <Select
          value={selectedAsset}
          onChange={(e) => setSelectedAsset(e.target.value as number)}
        >
          <MenuItem value="">Select an Asset</MenuItem>
          {assets.map((asset) => (
            <MenuItem key={asset.id} value={asset.id}>
              {asset.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Depreciation Table */}
      {depreciationData.length > 0 && (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>Depreciation</TableCell>
                  <TableCell>Remaining Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {depreciationData.map(
                  ({ year, depreciation, remainingValue }) => (
                    <TableRow key={year}>
                      <TableCell>{year}</TableCell>
                      <TableCell>${depreciation}</TableCell>
                      <TableCell>${remainingValue}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Download Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={downloadCSV}
          >
            Download CSV
          </Button>
        </>
      )}
    </Box>
  );
};

export default DepreciationSchedule;
