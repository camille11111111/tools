import React from 'react';
import { ChevronDown } from 'lucide-react';

const InvoiceTemplate = () => {
  return (
    <div className="invoice-container">
      <div className="header">
        <span className="company-name">Éminente Creative Production</span>
        <div className="dot"></div>
      </div>

      <div className="from-section">
        <h1 className="label">From</h1>
        <div className="company-info">
          <p>Éminente Creative Production</p>
          <p>52 Ronald Avenue Greenwich</p>
          <p>NSW 2065 Australia</p>
          <p>Éminente Pty Ltd</p>
          <p>ABN 84663448992</p>
        </div>
      </div>

      <div className="to-section">
        <h1 className="label">To</h1>
        <div className="client-info">
          <p>Natalee Royle</p>
          <p>Photographic Producer</p>
          <p>Paper Stone Scissors</p>
          <p>natalee@paperstonescissors.com</p>
          <p>+61419891017</p>
        </div>
      </div>

      <div className="invoice-details">
        <h1 className="invoice-title">Invoice</h1>
        <div className="details">
          <div className="detail-row">
            <span>JNECP162</span>
            <span className="detail-label">(Job)</span>
          </div>
          <div className="detail-row">
            <span>INECP162</span>
            <span className="detail-label">(Invoice)</span>
          </div>
          <div className="detail-row">
            <span>4 August 25</span>
            <span className="detail-label">(Date)</span>
          </div>
          <div className="detail-row">
            <span>Net 30</span>
            <span className="detail-label">(Terms)</span>
          </div>
          <div className="detail-row">
            <span>3 September 25</span>
            <span className="detail-label">(Due)</span>
          </div>
        </div>
      </div>

      <div className="job-section">
        <h1 className="job-name">Portmans</h1>
        <div className="job-details">
          <p>#4328</p>
          <p>Pre-Production Support</p>
          <p>July 25</p>
        </div>
      </div>

      <div className="line-items">
        {/* Line items would be mapped here */}
        <div className="line-item">
          <div className="item-info">
            <h3>Creative Production</h3>
            <p>Creative Production 1 x Day @ 800.00</p>
          </div>
          <span className="price">800.00</span>
        </div>
      </div>

      <div className="totals">
        <div className="bank-details">
          <h4>BANK DETAILS</h4>
          <p>(Name—Eminente Pty Ltd)</p>
          <p>(Number—647660974)</p>
          <p>(BSB—012281)</p>
        </div>
        <div className="amount-totals">
          <div className="total-row">
            <span>Sub Total</span>
            <span>800.00</span>
          </div>
          <div className="total-row">
            <span>GST</span>
            <span>80.00</span>
          </div>
          <div className="total-row">
            <span>Total</span>
            <span>880.00</span>
          </div>
        </div>
      </div>

      <div className="footer">
        <span className="page-number">01 of 01</span>
        <ChevronDown className="down-arrow" />
      </div>

      <div className="spine">
        <span className="spine-invoice">INVOICE</span>
        <span className="spine-number">INECP162</span>
      </div>
    </div>
  );
};

const styles = `
  .invoice-container {
    width: 595px;
    height: 842px;
    background-color: #F2F1EE;
    position: relative;
    font-family: 'PP Neue Montreal', sans-serif;
  }

  .header {
    padding: 19px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #CFCFC5;
  }

  .company-name {
    font-size: 12px;
    font-weight: bold;
    color: #0E0E0E;
    letter-spacing: -0.4px;
  }

  .dot {
    width: 11px;
    height: 11px;
    background-color: #0E0E0E;
    border-radius: 50%;
  }

  .from-section, .to-section {
    padding: 0 23px;
  }

  .label {
    font-family: 'Recife Display Web', serif;
    font-size: 70px;
    letter-spacing: -0.4px;
  }

  .from-section .label {
    color: #CFCFC5;
  }

  .to-section .label {
    color: #000;
  }

  .company-info, .client-info {
    font-family: 'Recife Display Web', serif;
    font-style: italic;
    font-size: 12px;
    color: #0E0E0E;
    text-align: right;
  }

  .invoice-details {
    padding: 0 23px;
  }

  .invoice-title {
    font-family: 'Recife Display Web', serif;
    font-size: 70px;
    color: #CFCFC5;
    letter-spacing: -0.4px;
  }

  .details {
    text-align: right;
    font-size: 10px;
  }

  .detail-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }

  .detail-label {
    font-family: 'Recife Display Web', serif;
    font-style: italic;
    color: #757575;
  }

  .job-section {
    padding: 0 23px;
  }

  .job-name {
    font-family: 'Recife Display Web', serif;
    font-size: 70px;
    color: #CFCFC5;
    letter-spacing: -0.4px;
  }

  .line-items {
    padding: 0 23px;
  }

  .line-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #F2F1EE;
  }

  .totals {
    padding: 0 23px;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }

  .footer {
    position: absolute;
    bottom: 10px;
    left: 23px;
    display: flex;
    align-items: center;
    gap: 220px;
  }

  .page-number {
    font-size: 8px;
    font-weight: bold;
    color: #757575;
  }

  .spine {
    position: absolute;
    right: 0;
    top: 0;
    width: 33px;
    height: 100%;
    background-color: #F2F1EE;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 100px 0;
    border-left: 1px solid #CFCFC5;
  }

  .spine-invoice, .spine-number {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 12px;
    font-weight: bold;
    color: #0E0E0E;
    text-align: center;
  }
`;

export default InvoiceTemplate;