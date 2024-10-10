import React, { useState } from 'react';

const ProductForm: React.FC = () => {
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [primaryGroup, setPrimaryGroup] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  const [notesImportant, setNotesImportant] = useState(false);

  // Properties state
  const [excludedFromSales, setExcludedFromSales] = useState(false);
  const [hasDirectCost, setHasDirectCost] = useState(false);
  const [availableOnCustomerPanel, setAvailableOnCustomerPanel] = useState(false);
  const [msrp, setMsrp] = useState(0);
  const [productType, setProductType] = useState('Standard');
  const [isControlledDrug, setIsControlledDrug] = useState(false);
  const [relatesToDeath, setRelatesToDeath] = useState(false);
  const [bundle, setBundle] = useState('No');
  const [isBought, setIsBought] = useState(false);
  const [isSold, setIsSold] = useState(false);
  const [inventoryTrack, setInventoryTrack] = useState('Product');

  // Pricing state
  const [cost, setCost] = useState(0);
  const [markup, setMarkup] = useState(0);
  const [fixedPrice, setFixedPrice] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [taxIncluded, setTaxIncluded] = useState(0);

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">New Product</h2>

      {/* Product Details Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Code</label>
          <input
            type="text"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product code"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Primary Group</label>
          <input
            type="text"
            value={primaryGroup}
            onChange={(e) => setPrimaryGroup(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter primary group"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any notes"
          />
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              checked={notesImportant}
              onChange={(e) => setNotesImportant(e.target.checked)}
              className="mr-2 focus:ring-blue-500"
            />
            <label className="text-sm">Notes Important</label>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Properties</h3>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2">
            <span className="text-sm">Excluded From Staff Sales Figures</span>
            <input
              type="checkbox"
              checked={excludedFromSales}
              onChange={() => setExcludedFromSales(!excludedFromSales)}
              className="ml-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Has Direct Cost</span>
            <input
              type="checkbox"
              checked={hasDirectCost}
              onChange={() => setHasDirectCost(!hasDirectCost)}
              className="ml-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Available on Customer Panel</span>
            <input
              type="checkbox"
              checked={availableOnCustomerPanel}
              onChange={() => setAvailableOnCustomerPanel(!availableOnCustomerPanel)}
              className="ml-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">MSRP ($)</span>
            <input
              type="number"
              value={msrp}
              onChange={(e) => setMsrp(parseFloat(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter MSRP"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Type</span>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Standard">Standard</option>
              <option value="Controlled">Controlled</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block mb-2">
            <span className="text-sm">Is Controlled Drug</span>
            <input
              type="checkbox"
              checked={isControlledDrug}
              onChange={() => setIsControlledDrug(!isControlledDrug)}
              className="ml-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Relates to Patient Death</span>
            <input
              type="checkbox"
              checked={relatesToDeath}
              onChange={() => setRelatesToDeath(!relatesToDeath)}
              className="ml-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Bundle</span>
            <select
              value={bundle}
              onChange={(e) => setBundle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>

          <label className="block mb-2">
            <span className="text-sm">Is Bought</span>
            <input
              type="checkbox"
              checked={isBought}
              onChange={() => setIsBought(!isBought)}
              className="ml-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Is Sold</span>
            <input
              type="checkbox"
              checked={isSold}
              onChange={() => setIsSold(!isSold)}
              className="ml-2 focus:ring-blue-500"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm">Inventory Track</span>
            <select
              value={inventoryTrack}
              onChange={(e) => setInventoryTrack(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Product">Product</option>
              <option value="Service">Service</option>
            </select>
          </label>
        </div>
      </div>

      {/* Pricing Section */}
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Pricing ($)</h3>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(parseFloat(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter cost"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Markup (%)</label>
          <input
            type="number"
            value={markup}
            onChange={(e) => setMarkup(parseFloat(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter markup percentage"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Fixed Price</label>
          <input
            type="number"
            value={fixedPrice}
            onChange={(e) => setFixedPrice(parseFloat(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter fixed price"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Tax Rate (%)</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(parseFloat(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tax rate"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Including Tax</label>
          <input
            type="number"
            value={taxIncluded}
            onChange={(e) => setTaxIncluded(parseFloat(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tax amount"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Product
        </button>
        <button
          type="button"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
