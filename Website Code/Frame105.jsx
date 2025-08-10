import React from 'react';
import { Circle } from 'lucide-react';

const Frame105 = () => {
  return (
    <div className="frame-105">
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
        <Circle className="circle" size={11} />
      </div>

      <div className="footer">
        <span className="page-number">08</span>
        <span className="company">Éminente Pty Ltd.</span>
      </div>

      <h1 className="title">Symbol:</h1>
      <span className="subtitle">(Logo & Colors)</span>

      <div className="grid">
        <div className="grid-item green"></div>
        <div className="grid-item light"></div>
        <div className="grid-item dark"></div>
        <div className="grid-item gray"></div>
      </div>

      <div className="logos">
        <div className="logo light"></div>
        <div className="logo light"></div>
        <div className="logo dark"></div>
        <div className="logo dark"></div>
      </div>
    </div>
  );
};

const styles = `
.frame-105 {
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

.vertical-lines .line:nth-child(1) { left: 30px; }
.vertical-lines .line:nth-child(2) { left: 680px; }
.vertical-lines .line:nth-child(3) { left: 710px; }
.vertical-lines .line:nth-child(4) { left: 730px; }
.vertical-lines .line:nth-child(5) { left: 760px; }
.vertical-lines .line:nth-child(6) { left: 1410px; }

.horizontal-lines .line {
  position: absolute;
  width: 680px;
  height: 1px;
  background: #CFCFC5;
}

.horizontal-lines .line:nth-child(1) { top: 41px; }
.horizontal-lines .line:nth-child(2) { top: 762px; }

.header {
  position: absolute;
  top: 19px;
  left: 50px;
  display: flex;
  align-items: center;
  gap: 1320px;
}

.brand {
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #0E0E0E;
  letter-spacing: -0.4px;
}

.circle {
  width: 11px;
  height: 11px;
  background: #0E0E0E;
  border-radius: 50%;
}

.footer {
  position: absolute;
  bottom: 16px;
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
}

.page-number, .company {
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #0E0E0E;
  letter-spacing: -0.4px;
}

.title {
  position: absolute;
  left: 50px;
  top: 50px;
  font-family: 'Recife Display Web', serif;
  font-size: 70px;
  color: #0E0E0E;
  letter-spacing: -0.4px;
}

.subtitle {
  position: absolute;
  left: 780px;
  top: 59px;
  font-family: 'Recife Display Web', serif;
  font-style: italic;
  font-size: 12px;
  color: #0E0E0E;
}

.grid {
  position: absolute;
  left: 780px;
  top: 96px;
  display: grid;
  grid-template-columns: repeat(2, 294px);
  grid-template-rows: repeat(2, 294px);
  gap: 20px;
}

.grid-item {
  width: 294px;
  height: 294px;
}

.grid-item.green { background: #0F3C4C; }
.grid-item.light { background: #F2F1EE; border: 1px solid #CFCFC5; }
.grid-item.dark { background: #0E0E0E; }
.grid-item.gray { background: #CFCFC5; }

.logos {
  position: absolute;
  left: 886px;
  top: 197px;
  display: grid;
  grid-template-columns: repeat(2, 83px);
  grid-template-rows: repeat(2, 92px);
  gap: 314px;
}

.logo {
  width: 83px;
  height: 92px;
  background: #333;
}

.logo.light { background: #F2F1EE; }
.logo.dark { background: #0E0E0E; }

@media (max-width: 1440px) {
  .frame-105 {
    width: 100%;
  }
}
`;

export default Frame105;