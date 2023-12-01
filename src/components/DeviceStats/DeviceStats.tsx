import React from 'react';
import SensorDataComponent from '../SensorData/SensorDataComponent';
import InventoryComponent from '../Inventory/InventoryComponent';
import { DeviceStatsCard, CardContentStyled, CardMediaStyled, CardHeader, DataContainer } from './DeviceStatsStyles';
import Typography from '@mui/material/Typography';

interface DeviceStatsProps {
  deviceId: string;
  deviceImage: string;
}

const DeviceStats: React.FC<DeviceStatsProps> = ({ deviceId, deviceImage }) => {
  return (
    <DeviceStatsCard>
      <CardHeader>
        <Typography variant="h5">{deviceId}</Typography>
      </CardHeader>
      <CardContentStyled>
      <CardMediaStyled image={deviceImage} title={deviceId} />
        <DataContainer>
          <SensorDataComponent deviceId={deviceId} />
          <InventoryComponent deviceId={deviceId} />
        </DataContainer>
      </CardContentStyled>
    </DeviceStatsCard>
  );
};

export default DeviceStats;

