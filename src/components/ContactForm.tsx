import React, { useState } from 'react';
import { Save, Plus, X, Printer } from 'lucide-react';

const ContactForm = () => {
  const [contactType, setContactType] = useState('individual');
  const [isCustomer, setIsCustomer] = useState(true);
  const [notesImportant, setNotesImportant] = useState(false);
  const [postMailToPhysical, setPostMailToPhysical] = useState(true);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">New Contact</h2>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center">
          <Save className="mr-2" size={16} />
          Save
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Contact Type</h3>
          <div className="bg-gray-100 p-3 rounded">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="business"
                name="contactType"
                value="business"
                checked={contactType === 'business'}
                onChange={() => setContactType('business')}
                className="mr-2"
              />
              <label htmlFor="business">Business</label>
              <input
                type="radio"
                id="individual"
                name="contactType"
                value="individual"
                checked={contactType === 'individual'}
                onChange={() => setContactType('individual')}
                className="ml-4 mr-2"
              />
              <label htmlFor="individual">Individual</label>
            </div>
            <input type="text" placeholder="Code" className="w-full p-2 border rounded" />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isCustomer}
                  onChange={() => setIsCustomer(!isCustomer)}
                  className="mr-2"
                />
                Customer
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Supplier
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Vet
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Syndicate
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Staff Member
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Pharmacy
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Other Details</h3>
          <div className="bg-gray-100 p-3 rounded">
            <textarea
              placeholder="Contact Notes"
              className="w-full p-2 border rounded mb-2"
              rows={4}
            ></textarea>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={notesImportant}
                onChange={() => setNotesImportant(!notesImportant)}
                className="mr-2"
              />
              Notes Important
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Tags</h3>
          <div className="bg-gray-100 p-3 rounded">
            <select className="w-full p-2 border rounded mb-2">
              <option>Discount Group (Limit 1)</option>
            </select>
            <select className="w-full p-2 border rounded mb-2">
              <option>Financial Customer Group (Limit 1)</option>
            </select>
            <select className="w-full p-2 border rounded mb-2">
              <option>General</option>
            </select>
            <select className="w-full p-2 border rounded mb-2">
              <option>Hear About Option (Limit 1)</option>
            </select>
            <select className="w-full p-2 border rounded">
              <option>Preferred Contact Method (Limit 1)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Personal Details</h3>
        <div className="flex gap-2">
          <select className="p-2 border rounded">
            <option>Title</option>
          </select>
          <input type="text" placeholder="First Name" className="flex-grow p-2 border rounded" />
          <input type="text" placeholder="Last Name" className="flex-grow p-2 border rounded" />
          <button className="bg-green-500 text-white p-2 rounded">
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Contact Methods</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email / Phone</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" className="w-full p-2 border rounded" /></td>
              <td><input type="text" className="w-full p-2 border rounded" /></td>
              <td><select className="w-full p-2 border rounded"><option>(BLANK)</option></select></td>
              <td className="flex justify-end">
                <button className="p-1"><Printer size={16} /></button>
                <button className="p-1"><X size={16} /></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="mt-2 bg-green-500 text-white p-2 rounded">
          <Plus size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold mb-2">Physical Address</h3>
          <input type="text" placeholder="Address Search" className="w-full p-2 border rounded" />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Postal Address</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={postMailToPhysical}
              onChange={() => setPostMailToPhysical(!postMailToPhysical)}
              className="mr-2"
            />
            Post Mail To Physical Address
          </label>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">General Information</h3>
        <input type="text" placeholder="Website" className="w-full p-2 border rounded mb-2" />
        <input type="text" placeholder="Pet Insurance Supplier (If Any)" className="w-full p-2 border rounded mb-2" />
        <input type="text" placeholder="Date of Birth (Primary Contact)" className="w-full p-2 border rounded mb-2" />
        <input type="text" placeholder="Driver License Number (Primary Contact)" className="w-full p-2 border rounded mb-2" />
        <input type="text" placeholder="Driver License Issuer (Primary Contact)" className="w-full p-2 border rounded" />
      </div>
    </div>
  );
};

export default ContactForm;