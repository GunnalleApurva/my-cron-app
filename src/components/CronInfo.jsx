import React from 'react';
import './CronInfo.css'; // Create this CSS file later

function CronInfo() {
  return (
    <div className="cron-info">
      <h2>Understanding Cron Expressions</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Allowed Values</th>
            <th>Special Characters</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Minutes</td>
            <td>0-59</td>
            <td>*, - , /</td>
            <td>Minutes of the hour</td>
          </tr>
          <tr>
            <td>Hours</td>
            <td>0-23</td>
            <td>*, - , /</td>
            <td>Hours of the day</td>
          </tr>
          <tr>
            <td>Day of Month</td>
            <td>1-31</td>
            <td>*, - , / , ? , L , W</td>
            <td>Day of the month</td>
          </tr>
          <tr>
            <td>Month</td>
            <td>1-12</td>
            <td>*, - , /</td>
            <td>Month of the year</td>
          </tr>
          <tr>
            <td>Day of Week</td>
            <td>0-6 (SUN=0)</td>
            <td>*, - , / , ? , L , #</td>
            <td>Day of the week</td>
          </tr>
        </tbody>
      </table>

      <h3>Examples:</h3>
      <ul>
        <li>Every minute: `* * * * *`</li>
        <li>Every hour: `0 * * * *`</li>
        <li>Every day at midnight: `0 0 * * *`</li>
        {/* Add more examples as needed */}
      </ul>
    </div>
  );
}

export default CronInfo;
