
import React, { useState } from 'react';

const AdminScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newScholarship, setNewScholarship] = useState({
    title: '',
    provider: '',
    type: 'Government',
    amount: '',
    status: 'Open',
    deadline: '',
    description: '',
    requirements: ''
  });

  const handleAddScholarship = () => {
    // Add scholarship logic here
    setShowModal(false);
  };

  const handleDeleteScholarship = (id) => {
    // Delete scholarship logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Scholarship Management</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add New Scholarship
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-500 uppercase">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Provider</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Deadline</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {scholarships.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                    No scholarships found. Click "Add New Scholarship" to get started.
                  </td>
                </tr>
              ) : (
                scholarships.map((scholarship) => (
                  <tr key={scholarship.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{scholarship.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{scholarship.provider}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        scholarship.type === "Government" ? "bg-blue-100 text-blue-600" :
                        scholarship.type === "Private" ? "bg-purple-100 text-purple-600" :
                        "bg-red-100 text-red-600"
                      }`}>
                        {scholarship.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{scholarship.amount}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        scholarship.status === "Open" ? "bg-green-100 text-green-600" : 
                        scholarship.status === "Closing" ? "bg-yellow-100 text-yellow-600" :
                        "bg-blue-100 text-blue-600"
                      }`}>
                        {scholarship.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{scholarship.deadline}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                      <button 
                        onClick={() => handleDeleteScholarship(scholarship.id)}
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

      {/* Add Scholarship Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Add New Scholarship</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Scholarship Title"
                className="w-full px-3 py-2 border rounded-lg"
                value={newScholarship.title}
                onChange={(e) => setNewScholarship({...newScholarship, title: e.target.value})}
              />
              <input
                type="text"
                placeholder="Provider"
                className="w-full px-3 py-2 border rounded-lg"
                value={newScholarship.provider}
                onChange={(e) => setNewScholarship({...newScholarship, provider: e.target.value})}
              />
              <select 
                className="w-full px-3 py-2 border rounded-lg"
                value={newScholarship.type}
                onChange={(e) => setNewScholarship({...newScholarship, type: e.target.value})}
              >
                <option value="Government">Government</option>
                <option value="Private">Private</option>
                <option value="International">International</option>
                <option value="County">County</option>
              </select>
              <input
                type="text"
                placeholder="Amount (e.g., Ksh 60,000)"
                className="w-full px-3 py-2 border rounded-lg"
                value={newScholarship.amount}
                onChange={(e) => setNewScholarship({...newScholarship, amount: e.target.value})}
              />
              <select 
                className="w-full px-3 py-2 border rounded-lg"
                value={newScholarship.status}
                onChange={(e) => setNewScholarship({...newScholarship, status: e.target.value})}
              >
                <option value="Open">Open</option>
                <option value="Closing">Closing Soon</option>
                <option value="Upcoming">Upcoming</option>
              </select>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg"
                value={newScholarship.deadline}
                onChange={(e) => setNewScholarship({...newScholarship, deadline: e.target.value})}
              />
              <textarea
                placeholder="Description"
                className="w-full px-3 py-2 border rounded-lg h-24"
                value={newScholarship.description}
                onChange={(e) => setNewScholarship({...newScholarship, description: e.target.value})}
              />
              <textarea
                placeholder="Requirements (comma separated)"
                className="w-full px-3 py-2 border rounded-lg h-20"
                value={newScholarship.requirements}
                onChange={(e) => setNewScholarship({...newScholarship, requirements: e.target.value})}
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleAddScholarship}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add Scholarship
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

export default AdminScholarships;