import React from 'react';
import cronstrue from 'cronstrue';
import './CronEvaluator.css';  

function CronEvaluator({ expression }) {
  try {
    const humanReadable = cronstrue.toString(expression);
    return (
      <div className="cron-evaluator">
        <h2>Here's what it means :</h2>
        <p>{humanReadable}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="cron-evaluator invalid-expression ">
        <p style={{ color: 'red' }}>Invalid cron expression.</p>
      </div>
    );
  }
}

export default CronEvaluator;
