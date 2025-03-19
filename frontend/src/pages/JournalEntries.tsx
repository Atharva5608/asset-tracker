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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const initialEntries = [
  {
    id: 1,
    asset: "Office Laptop",
    date: "2024-02-01",
    amount: "$500",
    status: "Pending",
  },
  {
    id: 2,
    asset: "Company Car",
    date: "2024-02-10",
    amount: "$1,500",
    status: "Approved",
  },
  {
    id: 3,
    asset: "Industrial Machine",
    date: "2024-03-01",
    amount: "$4,000",
    status: "Pending",
  },
  {
    id: 4,
    asset: "Office Furniture",
    date: "2024-03-10",
    amount: "$300",
    status: "Rejected",
  },
];

const JournalEntries: React.FC = () => {
  const [entries, setEntries] = useState(initialEntries);
  const [statusFilter, setStatusFilter] = useState("");

  const handleUpdateStatus = (id: number, newStatus: string) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, status: newStatus } : entry
      )
    );
  };

  const filteredEntries = statusFilter
    ? entries.filter((entry) => entry.status === statusFilter)
    : entries;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Journal Entries
      </Typography>

      {/* Status Filter */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Filter by Status</InputLabel>
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </FormControl>

      {/* Journal Entries Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEntries.map(({ id, asset, date, amount, status }) => (
              <TableRow key={id}>
                <TableCell>{asset}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{status}</TableCell>
                <TableCell>
                  {status === "Pending" && (
                    <>
                      <Button
                        color="success"
                        onClick={() => handleUpdateStatus(id, "Approved")}
                        sx={{ mr: 1 }}
                      >
                        Approve
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleUpdateStatus(id, "Rejected")}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default JournalEntries;
