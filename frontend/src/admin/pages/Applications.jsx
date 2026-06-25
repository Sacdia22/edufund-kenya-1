import React, { useState } from 'react';

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const handleApprove = (id) => {
    // Approve application logic here
  };

  const handleReject = (id) => {
    // Reject application logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Application Management</h2>
        <div className="flex gap-3">
          <select className="px-3 py-2 border rounded-lg bg-white">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <select className="px-3 py-2 border rounded-lg bg-white">
            <option value="all">All Types</option>
            <option value="scholarship">Scholarships</option>
            <option value="bursary">Bursaries</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-500 uppercase">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Scholarship/Bursary</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No applications found. Applications will appear here once students apply.
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{app.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{app.scholarship}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        app.type === "Scholarship" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                      }`}>
                        {app.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        app.status === "Approved" ? "bg-green-100 text-green-600" :
                        app.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                        "bg-red-100 text-red-600"
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{app.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                      <button 
                        onClick={() => handleApprove(app.id)}
                        className="text-green-600 hover:text-green-800 mr-2"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleReject(app.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Applications;