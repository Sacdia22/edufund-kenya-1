import React, { useState } from 'react';

const Counties = () => {
  const [counties, setCounties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCounty, setNewCounty] = useState({
    name: '',
    code: '',
    status: 'Active'
  });

  const handleAddCounty = () => {
    // Add county logic here
    setShowModal(false);
  };

  const handleDeleteCounty = (id) => {
    // Delete county logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">County Management</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add New County
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-500 uppercase">
                <th className="px-6 py-3">County Name</th>
                <th className="px-6 py-3">Code</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {counties.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                    No counties found. Click "Add New County" to get started.
                  </td>
                </tr>
              ) : (
                counties.map((county) => (
                  <tr key={county.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{county.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{county.code}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        county.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}>
                        {county.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                      <button 
                        onClick={() => handleDeleteCounty(county.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add County Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add New County</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="County Name"
                className="w-full px-3 py-2 border rounded-lg"
                value={newCounty.name}
                onChange={(e) => setNewCounty({...newCounty, name: e.target.value})}
              />
              <input
                type="text"
                placeholder="County Code (e.g., WAJ)"
                className="w-full px-3 py-2 border rounded-lg"
                value={newCounty.code}
                onChange={(e) => setNewCounty({...newCounty, code: e.target.value.toUpperCase()})}
              />
              <select 
                className="w-full px-3 py-2 border rounded-lg"
                value={newCounty.status}
                onChange={(e) => setNewCounty({...newCounty, status: e.target.value})}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleAddCounty}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add County
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counties;