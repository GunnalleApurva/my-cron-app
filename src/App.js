import React from 'react';
import CronInput from './components/CronInput';
import CronInfo from './components/CronInfo';

function App() {
    return (
      <div className="App">
        <h1>Cron Expression Generator</h1>
        <CronInput />
        <CronInfo /> 
      </div>
    );
  }
  
export default App;

