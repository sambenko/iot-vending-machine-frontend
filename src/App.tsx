import React from 'react';
import DeviceStats from './components/DeviceStats/DeviceStats';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Box, CssBaseline, Grid } from '@mui/material';

const App: React.FC = () => {
  const espboxliteImage = process.env.PUBLIC_URL + '/esp32_s3_box_lite.png';
  const espboxImage = process.env.PUBLIC_URL + '/esp32_s3_box.png';
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <DeviceStats deviceId="espboxlite" deviceImage={espboxliteImage} />
          </Grid>
          <Grid item>
            <DeviceStats deviceId="espbox" deviceImage={espboxImage} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
