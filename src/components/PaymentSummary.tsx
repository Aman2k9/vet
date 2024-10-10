import React, { useState } from 'react';

const PaymentSummary: React.FC = () => {
  // State for form inputs
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [creatingUser, setCreatingUser] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentType, setPaymentType] = useState('All');
  const [cardType, setCardType] = useState('All');
  const [reportFormat, setReportFormat] = useState('CSV');

  // Optional boolean flags
  const [combineSurcharge, setCombineSurcharge] = useState(false);
  const [addCardTable, setAddCardTable] = useState(false);

  // Example function to handle form submission
  const handleGenerateReport = () => {
    console.log('Generating report...');
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">Payment Summary</h2>

      {/* Date Range Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <input
            type="datetime-local"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <input
            type="datetime-local"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Creating User and Payment Method */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Creating User</label>
          <input
            type="text"
            value={creatingUser}
            onChange={(e) => setCreatingUser(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter creating user"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter payment method"
          />
        </div>
      </div>

      {/* Payment Types and Card Types */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Payment Types</label>
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Types</label>
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="AmericanExpress">American Express</option>
          </select>
        </div>
      </div>

      {/* Report Format */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="format"
              value="Excel"
              checked={reportFormat === 'Excel'}
              onChange={() => setReportFormat('Excel')}
              className="mr-2"
            />
            Excel
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="format"
              value="CSV"
              checked={reportFormat === 'CSV'}
              onChange={() => setReportFormat('CSV')}
              className="mr-2"
            />
            CSV
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="format"
              value="HTML"
              checked={reportFormat === 'HTML'}
              onChange={() => setReportFormat('HTML')}
              className="mr-2"
            />
            HTML
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="format"
              value="PDF"
              checked={reportFormat === 'PDF'}
              onChange={() => setReportFormat('PDF')}
              className="mr-2"
            />
            PDF
          </label>
        </div>
      </div>

      {/* Optional Checkboxes */}
      <div className="mb-6">
        <label className="block">
          <input
            type="checkbox"
            checked={combineSurcharge}
            onChange={() => setCombineSurcharge(!combineSurcharge)}
            className="mr-2"
          />
          Combine payment surcharge
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={addCardTable}
            onChange={() => setAddCardTable(!addCardTable)}
            className="mr-2"
          />
          Add the column and table for card types from vendor
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={handleGenerateReport}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Print
        </button>
        <button
          type="button"
          onClick={() => console.log('Scheduling report...')}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Schedule Report
        </button>
      </div>
    </div>
  );
};

export default PaymentSummary;
