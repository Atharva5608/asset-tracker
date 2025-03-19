import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard: React.FC = () => {
  // Dummy Data for Summary Cards
  const summaryData = [
    { title: "Total Assets", value: 25 },
    { title: "Total Depreciation", value: "$50,000" },
    { title: "Remaining Value", value: "$150,000" },
  ];

  // Dummy Data for Recent Assets Table
  const recentAssets = [
    {
      id: 1,
      name: "Company Car",
      category: "Vehicle",
      purchasePrice: "$30,000",
      depreciation: "$10,000",
    },
    {
      id: 2,
      name: "Office Laptop",
      category: "Electronics",
      purchasePrice: "$2,000",
      depreciation: "$500",
    },
    {
      id: 3,
      name: "Industrial Machine",
      category: "Equipment",
      purchasePrice: "$100,000",
      depreciation: "$40,000",
    },
  ];

  // Dummy Data for Depreciation Chart
  const depreciationData = [
    { year: "2021", depreciation: 10000 },
    { year: "2022", depreciation: 15000 },
    { year: "2023", depreciation: 18000 },
    { year: "2024", depreciation: 20000 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Summary Cards */}
      <Grid container spacing={3}>
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h4">{item.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Assets Table */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recent Assets
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Asset Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Purchase Price</TableCell>
                <TableCell>Depreciation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentAssets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.category}</TableCell>
                  <TableCell>{asset.purchasePrice}</TableCell>
                  <TableCell>{asset.depreciation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Depreciation Chart */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Depreciation Over Time
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={depreciationData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="depreciation" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
