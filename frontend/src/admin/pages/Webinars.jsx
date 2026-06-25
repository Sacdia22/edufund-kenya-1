import React, { useState } from 'react';

const Webinars = () => {
  const [webinars, setWebinars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingWebinar, setEditingWebinar] = useState(null);
  const [newWebinar, setNewWebinar] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    status: 'Upcoming',
    link: '',
    speaker: ''
  });

  const handleAddWebinar = () => {
    if (editingWebinar) {
      // Edit existing webinar
      const updatedWebinars = webinars.map(webinar => 
        webinar.id === editingWebinar.id ? { ...newWebinar, id: webinar.id } : webinar
      );
      setWebinars(updatedWebinars);
    } else {
      // Add new webinar
      const webinar = {
        ...newWebinar,
        id: Date.now(),
        attendees: 0
      };
      setWebinars([...webinars, webinar]);
    }
    setShowModal(false);
    setEditingWebinar(null);
    setNewWebinar({
      title: '',
      date: '',
      time: '',
      description: '',
      status: 'Upcoming',
      link: '',
      speaker: ''
    });
  };

  const handleEditWebinar = (webinar) => {
    setEditingWebinar(webinar);
    setNewWebinar(webinar);
    setShowModal(true);
  };

  const handleDeleteWebinar = (id) => {
    if (window.confirm('Are you sure you want to delete this webinar?')) {
      setWebinars(webinars.filter(webinar => webinar.id !== id));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingWebinar(null);
    setNewWebinar({
      title: '',
      date: '',
      time: '',
      description: '',
      status: 'Upcoming',
      link: '',
      speaker: ''
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-600';
      case 'Live': return 'bg-green-100 text-green-600';
      case 'Completed': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Webinar Management</h2>
          <p className="text-sm text-gray-500 mt-1">Create and manage scholarship webinars</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <span className="text-xl">➕</span>
          Create New Webinar
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Total Webinars</p>
          <p className="text-2xl font-bold text-gray-800">{webinars.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Upcoming</p>
          <p className="text-2xl font-bold text-blue-600">
            {webinars.filter(w => w.status === 'Upcoming').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Live Now</p>
          <p className="text-2xl font-bold text-green-600">
            {webinars.filter(w => w.status === 'Live').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Total Attendees</p>
          <p className="text-2xl font-bold text-purple-600">
            {webinars.reduce((total, w) => total + (w.attendees || 0), 0)}
          </p>
        </div>
      </div>

      {/* Webinars Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-500 uppercase">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Speaker</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Attendees</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {webinars.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-gray-500">No webinars found</p>
                    <p className="text-sm text-gray-400 mt-1">Click "Create New Webinar" to get started</p>
                  </td>
                </tr>
              ) : (
                webinars.map((webinar) => (
                  <tr key={webinar.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{webinar.title}</div>
                      {webinar.description && (
                        <div className="text-xs text-gray-500 truncate max-w-xs">{webinar.description}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{webinar.speaker || 'TBD'}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{webinar.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{webinar.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{webinar.attendees || 0}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(webinar.status)}`}>
                        {webinar.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {webinar.link && (
                          <a 
                            href={webinar.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800 text-sm"
                          >
                            Join
                          </a>
                        )}
                        <button 
                          onClick={() => handleEditWebinar(webinar)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteWebinar(webinar.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Webinar Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                {editingWebinar ? 'Edit Webinar' : 'Create New Webinar'}
              </h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700 text-2xl">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Webinar Title *</label>
                <input
                  type="text"
                  placeholder="e.g., How to Write a Winning Scholarship Essay"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newWebinar.title}
                  onChange={(e) => setNewWebinar({...newWebinar, title: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Speaker</label>
                <input
                  type="text"
                  placeholder="e.g., John Mwangi"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newWebinar.speaker}
                  onChange={(e) => setNewWebinar({...newWebinar, speaker: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newWebinar.date}
                    onChange={(e) => setNewWebinar({...newWebinar, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newWebinar.time}
                    onChange={(e) => setNewWebinar({...newWebinar, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  placeholder="Describe what the webinar is about..."
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                  value={newWebinar.description}
                  onChange={(e) => setNewWebinar({...newWebinar, description: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Join Link (Optional)</label>
                <input
                  type="url"
                  placeholder="https://zoom.us/meeting/..."
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newWebinar.link}
                  onChange={(e) => setNewWebinar({...newWebinar, link: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select 
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newWebinar.status}
                  onChange={(e) => setNewWebinar({...newWebinar, status: e.target.value})}
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Live">Live</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleAddWebinar}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {editingWebinar ? 'Update Webinar' : 'Create Webinar'}
              </button>
              <button 
                onClick={handleCloseModal}
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

export default Webinars;