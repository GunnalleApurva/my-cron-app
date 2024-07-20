import React, { useState } from 'react';
import './CronOutput.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentCopy } from '@mui/icons-material';

function CronOutput({ expression }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(expression);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); 
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="cron-output">
      <div className="expression-container">
        <SyntaxHighlighter language="bash" style={docco}>
          {expression}
        </SyntaxHighlighter>
        <ContentCopy
          className={`copy-icon ${copied ? 'copied' : ''}`}
          onClick={copyToClipboard}
        />
      </div>
      {copied && <span className="copied-message">Copied!</span>}
    </div>
  );
}

export default CronOutput;
