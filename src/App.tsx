import React from 'react';
import DeviceStats from './components/DeviceStats';

function App() {
  return (
    <div className="App">
      <h1>IoT Vending Machines</h1>
      <DeviceStats deviceId="espboxlite" />
      <DeviceStats deviceId="espbox" />
    </div>
  );
}

export default App;
