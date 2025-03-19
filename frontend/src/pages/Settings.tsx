import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
} from "@mui/material";

const Settings: React.FC = () => {
  const [depreciationMethod, setDepreciationMethod] = useState("Straight-line");
  const [integration, setIntegration] = useState("");

  const handleSaveSettings = () => {
    alert("Settings saved successfully!");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Depreciation Method */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ mt: 3 }}>
            {" "}
            {/* Adjusted margin */}
            <InputLabel>Depreciation Method</InputLabel>
            <Select
              value={depreciationMethod}
              onChange={(e) => setDepreciationMethod(e.target.value)}
            >
              <MenuItem value="Straight-line">Straight-line</MenuItem>
              <MenuItem value="Reducing Balance">Reducing Balance</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Accounting Integration */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth sx={{ mt: 3 }}>
            {" "}
            {/* Adjusted margin */}
            <InputLabel>Accounting Integration</InputLabel>
            <Select
              value={integration}
              onChange={(e) => setIntegration(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="QuickBooks">QuickBooks</MenuItem>
              <MenuItem value="SAP">SAP</MenuItem>
              <MenuItem value="Oracle">Oracle</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* API Key (Only if integration is selected) */}
        {integration && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="API Key"
              variant="outlined"
              sx={{ mt: 3 }}
            />
          </Grid>
        )}
      </Grid>

      {/* Save Button */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveSettings}
        >
          Save Settings
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
