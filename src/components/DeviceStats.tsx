// DeviceStats.tsx
import React from 'react';
import SensorDataComponent from './SensorDataComponent';
import InventoryComponent from './InventoryComponent';

interface DeviceStatsProps {
  deviceId: string;
}

const DeviceStats: React.FC<DeviceStatsProps> = ({ deviceId }) => {
  return (
    <div>
      <h1>Stats for {deviceId}</h1>
      <SensorDataComponent deviceId={deviceId} />
      <InventoryComponent deviceId={deviceId} />
    </div>
  );
};

export default DeviceStats;
