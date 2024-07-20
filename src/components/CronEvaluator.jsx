import React from 'react';
import cronstrue from 'cronstrue';
import './CronEvaluator.css';  

function CronEvaluator({ expression }) {
  try {
    const humanReadable = cronstrue.toString(expression);
    return (
      <div className="cron-evaluator">
        <h2>Human Readable Cron Expression:</h2>
        <p>{humanReadable}</p>
      </div>
    );
  } catch (error) {
    // Handle invalid cron expressions (optional)
    return (
      <div className="cron-evaluator">
        <p style={{ color: 'red' }}>Invalid cron expression.</p>
      </div>
    );
  }
}

export default CronEvaluator;
