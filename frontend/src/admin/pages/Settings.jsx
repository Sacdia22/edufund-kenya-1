import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'EduFund Kenya',
    siteEmail: 'info@edufundkenya.com',
    sitePhone: '+254 700 123456',
    address: 'Nairobi, Kenya',
    currency: 'KES',
    timezone: 'Africa/Nairobi',
    footerText: '© 2026 EduFund Kenya. All Rights Reserved.',
    enableRegistration: true,
    enableNotifications: true,
    maintenanceMode: false
  });

  const [activeTab, setActiveTab] = useState('general');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings logic here
    alert('Settings saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setSettings({
        siteName: 'EduFund Kenya',
        siteEmail: 'info@edufundkenya.com',
        sitePhone: '+254 700 123456',
        address: 'Nairobi, Kenya',
        currency: 'KES',
        timezone: 'Africa/Nairobi',
        footerText: '© 2026 EduFund Kenya. All Rights Reserved.',
        enableRegistration: true,
        enableNotifications: true,
        maintenanceMode: false
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">System Settings</h2>
          <p className="text-sm text-gray-500 mt-1">Configure your platform settings</p>
        </div>
        <button 
          onClick={handleReset}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Reset Defaults
        </button>
      </div>

      {/* Settings Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('general')}
            className={`pb-3 px-1 text-sm font-medium ${
              activeTab === 'general' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            ⚙️ General
          </button>
          <button
            onClick={() => setActiveTab('appearance')}
            className={`pb-3 px-1 text-sm font-medium ${
              activeTab === 'appearance' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            🎨 Appearance
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`pb-3 px-1 text-sm font-medium ${
              activeTab === 'email' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            ✉️ Email
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`pb-3 px-1 text-sm font-medium ${
              activeTab === 'security' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            🔒 Security
          </button>
        </nav>
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-6">
              {/* Site Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Name
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">This appears on the homepage and browser tab</p>
              </div>

              {/* Site Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Email
                </label>
                <input
                  type="email"
                  name="siteEmail"
                  value={settings.siteEmail}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Used for system notifications and contact</p>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="sitePhone"
                  value={settings.sitePhone}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select
                  name="currency"
                  value={settings.currency}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="KES">KES - Kenyan Shilling</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                </select>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <select
                  name="timezone"
                  value={settings.timezone}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Africa/Nairobi">Africa/Nairobi (EAT)</option>
                  <option value="Africa/Lagos">Africa/Lagos (WAT)</option>
                  <option value="Africa/Cairo">Africa/Cairo (CAT)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>

              {/* Footer Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Footer Text
                </label>
                <input
                  type="text"
                  name="footerText"
                  value={settings.footerText}
                  onChange={handleChange}
                  className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Settings
            </button>
          </div>
        </form>
      )}

      {/* Appearance Settings */}
      {activeTab === 'appearance' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Primary Color</span>
              <input 
                type="color" 
                value="#2563EB" 
                className="w-12 h-10 rounded border-0 cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Success Color</span>
              <input 
                type="color" 
                value="#16A34A" 
                className="w-12 h-10 rounded border-0 cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Danger Color</span>
              <input 
                type="color" 
                value="#DC2626" 
                className="w-12 h-10 rounded border-0 cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Warning Color</span>
              <input 
                type="color" 
                value="#EAB308" 
                className="w-12 h-10 rounded border-0 cursor-pointer"
              />
            </div>
            <p className="text-sm text-gray-500">Color settings will be available in the next update</p>
          </div>
        </div>
      )}

      {/* Email Settings */}
      {activeTab === 'email' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Host
              </label>
              <input
                type="text"
                placeholder="smtp.gmail.com"
                className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Port
              </label>
              <input
                type="number"
                placeholder="587"
                className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Username
              </label>
              <input
                type="text"
                placeholder="your-email@gmail.com"
                className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full max-w-md px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-sm text-gray-500">Email settings will be available in the next update</p>
          </div>
        </div>
      )}

      {/* Security Settings */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h4 className="font-medium text-gray-800">Enable Registration</h4>
                <p className="text-sm text-gray-500">Allow new users to register on the platform</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="enableRegistration"
                  checked={settings.enableRegistration}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h4 className="font-medium text-gray-800">Enable Notifications</h4>
                <p className="text-sm text-gray-500">Send email notifications to users</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="enableNotifications"
                  checked={settings.enableNotifications}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h4 className="font-medium text-gray-800">Maintenance Mode</h4>
                <p className="text-sm text-gray-500">Put the site in maintenance mode</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Clear Cache
              </button>
              <button className="ml-3 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                Backup Database
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
