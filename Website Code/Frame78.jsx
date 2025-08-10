import React from 'react';
import { ArrowDown } from 'lucide-react';

const Frame78 = () => {
  return (
    <div className="frame-78">
      <div className="vertical-lines">
        <div className="line line-18"></div>
        <div className="line line-12"></div>
        <div className="line line-13"></div>
        <div className="group-9">
          <div className="line line-5"></div>
          <div className="line line-6"></div>
        </div>
        <div className="line line-19"></div>
      </div>

      <div className="horizontal-lines">
        <div className="line line-7"></div>
        <div className="line line-8"></div>
        <div className="line line-10"></div>
        <div className="line line-11"></div>
      </div>

      <div className="header">
        <div className="left">
          <h1 className="title">Creative Production</h1>
        </div>
        <div className="right">
          <nav className="nav">About, Work, Contact</nav>
          <div className="dot"></div>
        </div>
      </div>

      <div className="content">
        <div className="sidebar">
          <span className="rotate-text contents">Contents</span>
          <span className="rotate-text eminente">éminente</span>
          <div className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className="main">
          <div className="logo">éminente</div>
          
          <div className="contact-info">
            <div className="left-info">
              <p>Camille Peck</p>
              <p>Creative Producer</p>
              <p>+ 61 282 182 143</p>
              <p>hello@eminent.art</p>
            </div>

            <div className="center-info">
              <p>Éminente Creative Production</p>
              <p>Paramount</p>
              <p>55 Brisbane Street</p>
              <p>Surry Hills NSW 2010</p>
              <p>Australia</p>
              <br />
              <p>Éminente Pty Ltd</p>
              <p>ABN 84663448992</p>
            </div>

            <div className="right-info">
              <p>Instagram:</p>
              <p>@eminente.art</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="copyright">
          All photographs are copyrighted and protected under international copyright laws. 
          The images may not be reproduced in any form, stored, or manipulated without prior 
          written permission from the copyright holder(s). Copyright © 2023 Éminente Pty Ltd.
        </div>
        <div className="page-number">14</div>
        <div className="back-cover">[Back cover]</div>
        <ArrowDown className="arrow-down" size={18} />
      </div>
    </div>
  );
};

export default Frame78;

const styles = `
.frame-78 {
  width: 1440px;
  height: 800px;
  background: rgb(242, 241, 238);
  position: relative;
  font-family: 'PP Neue Montreal', sans-serif;
  letter-spacing: -0.4px;
}

.vertical-lines .line {
  position: absolute;
  width: 1px;
  height: 800px;
  background: rgb(207, 207, 197);
}

.line-18 { left: 1409px; }
.line-12 { left: 770px; }
.line-13 { left: 690px; }
.line-19 { left: 50px; }

.group-9 {
  position: absolute;
  left: 720px;
  .line {
    margin-right: 20px;
  }
}

.horizontal-lines .line {
  position: absolute;
  height: 1px;
  background: rgb(207, 207, 197);
}

.line-7, .line-8 {
  top: 40.5px;
}

.line-10, .line-11 {
  bottom: 38.5px;
}

.line-7 { left: 50px; width: 670px; }
.line-8 { left: 741px; width: 668px; }
.line-10 { left: 50px; width: 670px; }
.line-11 { left: 740px; width: 669px; }

.header {
  position: absolute;
  top: 19px;
  width: 100%;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 12px;
  font-weight: bold;
  color: rgb(14, 14, 14);
}

.nav {
  font-size: 12px;
  font-weight: bold;
  color: rgb(14, 14, 14);
}

.dot {
  position: absolute;
  right: 62px;
  top: 3px;
  width: 11px;
  height: 11px;
  background: rgb(14, 14, 14);
  border-radius: 50%;
}

.content {
  position: relative;
  height: calc(100% - 200px);
  margin-top: 100px;
}

.sidebar {
  position: absolute;
  left: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rotate-text {
  transform: rotate(90deg);
  transform-origin: left top;
  font-size: 12px;
  font-weight: bold;
  color: rgb(14, 14, 14);
  white-space: nowrap;
}

.logo {
  font-size: 244px;
  font-weight: bold;
  color: rgb(14, 14, 14);
  position: absolute;
  left: 73px;
  top: 50%;
  transform: translateY(-50%);
}

.contact-info {
  position: absolute;
  top: 59px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 71px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(14, 14, 14);
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 73px 30px;
}

.copyright {
  font-size: 12px;
  font-weight: bold;
  color: rgb(14, 14, 14);
  max-width: 1305px;
}

.page-number {
  position: absolute;
  left: 69px;
  bottom: 16px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(14, 14, 14);
}

.back-cover {
  position: absolute;
  right: 119px;
  bottom: 17px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(14, 14, 14);
}

.arrow-down {
  position: absolute;
  left: 34px;
  bottom: 16.5px;
  transform: rotate(180deg);
}
`;

document.head.appendChild(document.createElement('style')).textContent = styles;