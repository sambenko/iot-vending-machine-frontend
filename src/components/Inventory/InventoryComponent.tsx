import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InventoryItem } from '../../types/inventoryData';
import { InventoryContainer } from './InventoryStyles';

interface InventoryComponentProps {
  deviceId: string;
}

const InventoryComponent: React.FC<InventoryComponentProps> = ({ deviceId }) => {
  const [inventory, setInventory] = useState<Record<string, number>>({});
  const baseUrl = 'http://localhost:3001/api';

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${baseUrl}/inventory/${deviceId}`)
        .then(response => {
          const transformedInventory = transformInventoryData(response.data);
          setInventory(transformedInventory);
        })
        .catch(error => console.error('Error fetching inventory data:', error));
    };
    
    fetchData();
    const interval = setInterval(fetchData, 60000);
    
    return () => clearInterval(interval);
  }, [deviceId]);

  return (
    <InventoryContainer>
      <h2>Inventory</h2>
      {Object.entries(inventory).map(([itemName, quantity], index) => (
        <div key={index}>
          <p>Item: {itemName}</p>
          <p>Quantity: {quantity}</p>
        </div>
      ))}
    </InventoryContainer>
  );
};

function transformInventoryData(data: InventoryItem[]): Record<string, number> {
  const transformed: Record<string, number> = {};
  data.forEach(item => {
    transformed[item.itemName] = item.quantity;
  });
  return transformed;
}

export default InventoryComponent;
