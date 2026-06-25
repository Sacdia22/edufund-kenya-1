
import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Student',
    status: 'Active'
  });

  const handleAddUser = () => {
    // Add user logic here
    setShowModal(false);
  };

  const handleDeleteUser = (id) => {
    // Delete user logic here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add New User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-500 uppercase">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Joined</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No users found. Click "Add New User" to get started.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.role === "Admin" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.joined || '2026-01-01'}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                      <button 
                        onClick={() => handleDeleteUser(user.id)}
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

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add New User</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 border rounded-lg"
                value={newUser.name}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-lg"
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              />
              <select 
                className="w-full px-3 py-2 border rounded-lg"
                value={newUser.role}
                onChange={(e) => setNewUser({...newUser, role: e.target.value})}
              >
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
              </select>
              <select 
                className="w-full px-3 py-2 border rounded-lg"
                value={newUser.status}
                onChange={(e) => setNewUser({...newUser, status: e.target.value})}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleAddUser}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add User
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

export default Users;