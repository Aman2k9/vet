import React, { useState } from 'react';
import { Save, Plus, X, Camera } from 'lucide-react';

const PatientForm = () => {
  const [notesImportant, setNotesImportant] = useState(false);
  const [estimatedAge, setEstimatedAge] = useState(false);
  const [sex, setSex] = useState('Unknown');

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">New Patient</h2>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded flex items-center">
          <Save className="mr-2" size={16} />
          Save
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Details</h3>
          <div className="bg-gray-100 p-3 rounded">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Owner</label>
              <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Patient Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Code</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Microchip Number</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Weight(lb) - Units</label>
              <div className="flex">
                <input type="text" className="w-2/3 p-2 border rounded-l" />
                <select className="w-1/3 p-2 border rounded-r">
                  <option>lb</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Rabies Number</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Vacc</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={estimatedAge}
                  onChange={() => setEstimatedAge(!estimatedAge)}
                  className="mr-2"
                />
                <span className="mr-2">Estimated</span>
                <input type="text" placeholder="Not Set" className="w-1/2 p-2 border rounded" />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Sex</label>
              <div className="flex space-x-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="M"
                    checked={sex === 'M'}
                    onChange={() => setSex('M')}
                    className="mr-1"
                  />
                  M
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="MN"
                    checked={sex === 'MN'}
                    onChange={() => setSex('MN')}
                    className="mr-1"
                  />
                  MN
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="F"
                    checked={sex === 'F'}
                    onChange={() => setSex('F')}
                    className="mr-1"
                  />
                  F
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="FS"
                    checked={sex === 'FS'}
                    onChange={() => setSex('FS')}
                    className="mr-1"
                  />
                  FS
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Unknown"
                    checked={sex === 'Unknown'}
                    onChange={() => setSex('Unknown')}
                    className="mr-1"
                  />
                  Unknown
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Species</label>
              <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Breed</label>
              <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Patient Color</label>
              <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Resuscitate</label>
              <select className="w-full p-2 border rounded">
                <option>Select...</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Other Details</h3>
          <div className="bg-gray-100 p-3 rounded">
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Bill To Other
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Is Animal Group (for RVM)
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Lives Away From Owner
            </label>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Insurance Supplier</label>
              <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Insurance Number</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Preferred Doctor</label>
              <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Second Preferred Doctor</label>
              <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Other Interested Contacts</label>
              <div className="flex items-center">
                <input type="text" placeholder="(BLANK)" className="w-full p-2 border rounded-l" />
                <button className="bg-green-500 text-white p-2 rounded-r">
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Upload an image for the patient</label>
              <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Animal Notes</h3>
          <div className="bg-gray-100 p-3 rounded">
            <textarea className="w-full p-2 border rounded mb-2" rows={6}></textarea>
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

          <h3 className="font-semibold mb-2 mt-4">Tags</h3>
          <div className="bg-gray-100 p-3 rounded">
            <select className="w-full p-2 border rounded mb-2">
              <option>General</option>
            </select>
            <select className="w-full p-2 border rounded">
              <option>Reminder</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;