import React, { useState } from 'react';

const AdminBursaries = () => {
  const [bursaries, setBursaries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newBursary, setNewBursary] = useState({
    title: '',
    county: '',
    amount: '',
    status: 'Open',
    deadline: '',
    description: '',
    requirements: ''
  });

  const handleAddBursary = () => {
    // Add bursary logic here
    setShowModal(false);
  };

  const handleDeleteBursary = (id) => {
    // Delete bursary logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Bursary Management</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add New Bursary
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-500 uppercase">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">County</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Deadline</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bursaries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No bursaries found. Click "Add New Bursary" to get started.
                  </td>
                </tr>
              ) : (
                bursaries.map((bursary) => (
                  <tr key={bursary.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{bursary.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{bursary.county}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{bursary.amount}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        bursary.status === "Open" ? "bg-green-100 text-green-600" : 
                        bursary.status === "Closing" ? "bg-yellow-100 text-yellow-600" :
                        "bg-blue-100 text-blue-600"
                      }`}>
                        {bursary.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{bursary.deadline}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                      <button 
                        onClick={() => handleDeleteBursary(bursary.id)}
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

      {/* Add Bursary Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Add New Bursary</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Bursary Title"
                className="w-full px-3 py-2 border rounded-lg"
                value={newBursary.title}
                onChange={(e) => setNewBursary({...newBursary, title: e.target.value})}
              />
              <input
                type="text"
                placeholder="County"
                className="w-full px-3 py-2 border rounded-lg"
                value={newBursary.county}
                onChange={(e) => setNewBursary({...newBursary, county: e.target.value})}
              />
              <input
                type="text"
                placeholder="Amount (e.g., Ksh 15,000 - 40,000)"
                className="w-full px-3 py-2 border rounded-lg"
                value={newBursary.amount}
                onChange={(e) => setNewBursary({...newBursary, amount: e.target.value})}
              />
              <select 
                className="w-full px-3 py-2 border rounded-lg"
                value={newBursary.status}
                onChange={(e) => setNewBursary({...newBursary, status: e.target.value})}
              >
                <option value="Open">Open</option>
                <option value="Closing">Closing Soon</option>
                <option value="Upcoming">Upcoming</option>
              </select>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg"
                value={newBursary.deadline}
                onChange={(e) => setNewBursary({...newBursary, deadline: e.target.value})}
              />
              <textarea
                placeholder="Description"
                className="w-full px-3 py-2 border rounded-lg h-24"
                value={newBursary.description}
                onChange={(e) => setNewBursary({...newBursary, description: e.target.value})}
              />
              <textarea
                placeholder="Requirements (comma separated)"
                className="w-full px-3 py-2 border rounded-lg h-20"
                value={newBursary.requirements}
                onChange={(e) => setNewBursary({...newBursary, requirements: e.target.value})}
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleAddBursary}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add Bursary
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

export default AdminBursaries;