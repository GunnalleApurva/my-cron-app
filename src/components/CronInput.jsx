import React, { useState } from 'react';
import './CronInput.css';
import CronOutput from './CronOutput';
import CronEvaluator from './CronEvaluator';

function CronInput() {
  const [cronFields, setCronFields] = useState({
    minutes: '',
    hours: '',
    dayOfMonth: '',
    month: '',
    dayOfWeek: '',
  });

  const [generatedExpression, setGeneratedExpression] = useState('');
  const [validationError, setValidationError] = useState(null);

  function validateCronExpression(expression) {
    const cronRegex = /^(\*|(\d+(-\d+)?(,\d+(-\d+)?)*)|\d+([\/]\d+)?)\s(\*|(\d+(-\d+)?(,\d+(-\d+)?)*)|\d+([\/]\d+)?)\s(\*|(\d+(-\d+)?(,\d+(-\d+)?)*)|\d+([\/]\d+)?)\s(\*|(\d+(-\d+)?(,\d+(-\d+)?)*)|\d+([\/]\d+)?)\s(\*|([0-6])(-([0-6]))?(,([0-6])(-([0-6]))?)*)$/i;
    return cronRegex.test(expression);
  }

  function generateCronExpression() {
    const expressionValues = Object.values(cronFields).map(value => value || '*');
    const cronExpression = expressionValues.join(' ');

    if (!validateCronExpression(cronExpression)) {
      setValidationError('Invalid cron expression format.');
      return;
    }

    setValidationError(null);
    setGeneratedExpression(cronExpression);
  }

  return (
    <div className="cron-input">
      {[
        { label: 'Minutes (0-59)', value: 'minutes' },
        { label: 'Hours (0-23)', value: 'hours' },
        { label: 'Day of Month (1-31)', value: 'dayOfMonth' },
        { label: 'Month (1-12)', value: 'month' },
        { label: 'Day of Week (0-6, SUN=0)', value: 'dayOfWeek' },
      ].map((field) => (
        <div key={field.value} className="input-group">
          <input
            type="text"
            placeholder={field.label}
            value={cronFields[field.value]}
            onChange={(e) =>
              setCronFields({ ...cronFields, [field.value]: e.target.value })
            }
          />
          <select
            value={cronFields[field.value] || '*'}
            onChange={(e) =>
              setCronFields({ ...cronFields, [field.value]: e.target.value })
            }
          >
            {/* Options for minutes, hours, dayOfMonth, and month */}
            {field.value !== 'dayOfWeek' && (
              <>
                <option value="*">*</option>
                <option value=",">,</option>
                <option value="-">-</option>
                <option value="/">/</option>
              </>
            )}
            {/* Options for dayOfWeek (0-6) */}
            {field.value === 'dayOfWeek' &&
              Array.from({ length: 7 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
          </select>
        </div>
      ))}
     <button onClick={generateCronExpression}>
        Generate Cron Expression
      </button>

      {validationError && (
        <p style={{ color: 'red' }}>{validationError}</p>
      )}
      {generatedExpression && (
        <>
          <CronOutput expression={generatedExpression} />
          <CronEvaluator expression={generatedExpression} />
        </>
      )}
    </div>
  );
}

export default CronInput;
