import React, { useState } from 'react';

const InvoiceForm = () => {
  const [client, setClient] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Format for input type="date"
  const [animal, setAnimal] = useState('');
  const [clinicalRecord, setClinicalRecord] = useState('');
  const [reference, setReference] = useState('');
  const [purchaseOrder, setPurchaseOrder] = useState('');
  const [invoiceLines, setInvoiceLines] = useState([{ product: '', quantity: 1, price: 0 }]);

  const addInvoiceLine = () => {
    setInvoiceLines([...invoiceLines, { product: '', quantity: 1, price: 0 }]);
  };

  const handleInvoiceLineChange = (index, field, value) => {
    const newLines = [...invoiceLines];
    newLines[index][field] = value;
    setInvoiceLines(newLines);
  };

  const calculateTotal = () => {
    return invoiceLines.reduce((total, line) => total + (line.price * line.quantity), 0);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">New Invoice</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Client</label>
          <select
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Client</option>
            {/* Add client options */}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Date & Time</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Animal (Optional)</label>
          <select
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Animal</option>
            {/* Add animal options */}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Clinical Record (Optional)</label>
          <select
            value={clinicalRecord}
            onChange={(e) => setClinicalRecord(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Clinical Record</option>
            {/* Add clinical record options */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reference</label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Purchase Order Numbers</label>
          <input
            type="text"
            value={purchaseOrder}
            onChange={(e) => setPurchaseOrder(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-2">Invoice Items</h3>
        {invoiceLines.map((line, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 mb-2">
            <input
              type="text"
              placeholder="Product"
              value={line.product}
              onChange={(e) => handleInvoiceLineChange(index, 'product', e.target.value)}
              className="col-span-2 p-2 border rounded"
            />
            <input
              type="number"
              value={line.quantity}
              onChange={(e) => handleInvoiceLineChange(index, 'quantity', e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="number"
              value={line.price}
              onChange={(e) => handleInvoiceLineChange(index, 'price', e.target.value)}
              className="p-2 border rounded"
            />
            <span className="p-2 border rounded text-center">
              ${(line.price * line.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <button
          type="button"
          onClick={addInvoiceLine}
          className="text-blue-500 mt-2"
        >
          + Add new invoice line
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-lg">Total: ${calculateTotal().toFixed(2)}</h3>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Invoice</button>
      </div>
    </div>
  );
};

export default InvoiceForm;
