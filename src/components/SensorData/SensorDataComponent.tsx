import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SensorData } from '../../types/SensorData';
import { SensorDataContainer } from './SensorDataStyles';

interface SensorDataComponentProps {
  deviceId: string;
}

const SensorDataComponent: React.FC<SensorDataComponentProps> = ({ deviceId }) => {
  const [sensorData, setSensorData] = useState<SensorData>({});
  const baseUrl = 'http://localhost:3001/api';

  

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${baseUrl}/sensor/${deviceId}`)
        .then(response => {
          const data = transformSensorData(response.data);
          setSensorData(data);
        })
        .catch(error => console.error('Error fetching sensor data:', error));
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [deviceId]);

  return (
    <SensorDataContainer>
      <h2>Sensor Data</h2>
      <p>Temperature: {sensorData.temperature ? `${sensorData.temperature}°C` : 'N/A'}</p>
      <p>Pressure: {sensorData.pressure ? `${sensorData.pressure} hPa` : 'N/A'}</p>
      <p>Humidity: {sensorData.humidity ? `${sensorData.humidity}%` : 'N/A'}</p>
      <p>Gas: {sensorData.gas ? `${sensorData.gas}Ω` : 'N/A'}</p>
    </SensorDataContainer>
  );
};

function transformSensorData(data: any[]): SensorData {
  const transformed: SensorData = {};
  data.forEach(item => {
    switch(item.sensorType) {
      case 'Temperature':
        transformed.temperature = item.value;
        break;
      case 'Pressure':
        transformed.pressure = item.value;
        break;
      case 'Humidity':
        transformed.humidity = item.value;
        break;
      case 'Gas':
        transformed.gas = item.value;
        break;
    }
  });
  return transformed;
}

export default SensorDataComponent;
