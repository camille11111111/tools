import React from 'react';
import { Circle } from 'lucide-react';

const Frame106 = () => {
  return (
    <div className="frame">
      <div className="vertical-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line-group">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="line"></div>
      </div>

      <div className="horizontal-lines">
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="header">
        <span className="brand">éminente</span>
        <div className="dot"></div>
      </div>

      <div className="footer">
        <span className="page-number">05</span>
        <span className="company">Éminente Pty Ltd.</span>
      </div>

      <div className="content">
        <h1 className="title">Logotype:</h1>
        
        <div className="logo-section">
          <span className="label">Logotype:</span>
          <div className="logo"></div>
        </div>

        <div className="symbol-section">
          <span className="label">Symbol:</span>
          <div className="symbol"></div>
        </div>

        <div className="size-guide">
          <div className="line"></div>
          <div className="line"></div>
          <span className="web-size">11px (for web)</span>
          <span className="print-size">4mm (for print)</span>
          <span className="note">(Logo minimal size)</span>
        </div>

        <div className="symbol-guide">
          <div className="line"></div>
          <div className="line"></div>
          <span className="web-size">11px (for web)</span>
          <span className="print-size">4mm (for print)</span>
          <span className="note">(Symbol minimal size)</span>
        </div>
      </div>
    </div>
  );
};

const styles = `
.frame {
  width: 1440px;
  height: 800px;
  background: #F2F1EE;
  position: relative;
}

.vertical-lines .line {
  position: absolute;
  width: 1px;
  height: 800px;
  background: #CFCFC5;
}

.horizontal-lines .line {
  position: absolute;
  width: 680px;
  height: 1px;
  background: #CFCFC5;
}

.header {
  position: absolute;
  top: 19px;
  left: 50px;
  display: flex;
  align-items: center;
}

.brand {
  font-family: 'PP Neue Montreal';
  font-weight: bold;
  font-size: 12px;
  color: #0E0E0E;
  letter-spacing: -0.4px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #0E0E0E;
  position: absolute;
  right: -1328px;
  top: 3px;
}

.footer {
  position: absolute;
  bottom: 16px;
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
}

.page-number,
.company {
  font-family: 'PP Neue Montreal';
  font-weight: bold;
  font-size: 12px;
  color: #0E0E0E;
}

.title {
  font-family: 'Recife Display Web';
  font-size: 70px;
  color: #0E0E0E;
  position: absolute;
  top: 50px;
  left: 50px;
  letter-spacing: -0.4px;
}

.logo-section,
.symbol-section {
  position: absolute;
  left: 780px;
}

.logo-section {
  top: 59px;
}

.symbol-section {
  top: 411px;
}

.label {
  font-family: 'PP Neue Montreal';
  font-weight: bold;
  font-size: 12px;
  color: #0E0E0E;
}

.size-guide,
.symbol-guide {
  position: absolute;
  left: 871px;
  width: 430px;
}

.size-guide {
  top: 261px;
}

.symbol-guide {
  top: 645px;
}

.note {
  font-family: 'Recife Display Web';
  font-style: italic;
  font-size: 12px;
  color: #0E0E0E;
}

@media (max-width: 1440px) {
  .frame {
    width: 100%;
  }
}
`;

export default Frame106;