import  { useState } from 'react';

export function Profilecontent() {
  // 1. Setup Controlled Component States
  const [preferences, setPreferences] = useState({
    expiryAlerts: true,
    emailNotifications: true,
    twoFactor: true,
    reminderTiming: "30, 14, 7, 1 day"
  });

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleToggle = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTimingChange = (e) => {
    setPreferences((prev) => ({ ...prev, reminderTiming: e.target.value }));
  };

  const handleSaveChanges = () => {
    console.log("Saving user preferences:", preferences);
    alert("Changes saved successfully!");
  };

  return (
    // Max-width increased to max-w-6xl for desktop space; added pb-40 to clear sticky bar safely
    <main className="pt-20 pb-40 px-4 max-w-6xl mx-auto space-y-6">
      
      {/* Page Title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Profile & Settings</h2>
        <p className="text-sm text-gray-500">Manage your credentials and preferences for Expirova</p>
      </div>

      {/* Responsive Grid Wrapper: Stacks on mobile, splits into 2 clean columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* LEFT SIDE COLUMN (Profile Overview & Quick Stats) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Header Card */}
          <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-700"></div>
            
            <div className="relative mt-2">
              <img 
                alt="Dr. Sarah Jenkins" 
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-100" 
                src="https://i.pravatar.cc/150?img=32"
              />
              <button type="button" className="absolute bottom-0 right-0 bg-blue-700 text-white p-1 rounded-full border-2 border-white active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[16px] block">edit</span>
              </button>
            </div>

            <div className="flex-grow mt-3">
              <div className="flex flex-col items-center gap-1.5">
                <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Jenkins</h3>
                <span className="bg-blue-50 text-blue-700 px-3 py-0.5 rounded-full text-xs font-medium w-fit">
                  Senior Pharmacist
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">sarah.jenkins@citygen.hosp</p>
              <p className="text-sm font-mono text-gray-500 mt-0.5">+44 7700 900123</p>
            </div>

            <button type="button" className="mt-5 w-full px-4 py-2 border border-blue-700 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors active:scale-95">
              Edit Profile
            </button>
          </section>

          {/* Activity Stats Cards Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Total Scans</p>
              <p className="text-lg font-bold text-blue-700 mt-1">1,240</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Tracked</p>
              <p className="text-lg font-bold text-blue-700 mt-1">850</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Resolved</p>
              <p className="text-lg font-bold text-green-700 mt-1">98%</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE COLUMN (Core Configurations & Preferences Data) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Organization Details Card */}
          <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-700">corporate_fare</span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Organization Details</h3>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium text-gray-400">Hospital</p>
                <p className="text-sm font-medium text-gray-800">City General Hospital</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Branch</p>
                <p className="text-sm font-medium text-gray-800">Central Pharmacy</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Department</p>
                <p className="text-sm font-medium text-gray-800">Inpatient Meds</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-400">Scope</p>
                <p className="text-sm font-medium text-gray-800">Pharmacy Shelves A-G</p>
              </div>
            </div>
          </section>

          {/* Alert Preferences Section */}
          <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-600">notifications_active</span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Alert Preferences</h3>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              
              {/* Expiry Alerts Toggle */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">Expiry Alerts</p>
                  <p className="text-xs text-gray-500">Get notified before items expire</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.expiryAlerts}
                    onChange={() => handleToggle('expiryAlerts')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                </label>
              </div>

              {/* Email Notifications Toggle */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">Email Notifications</p>
                  <p className="text-xs text-gray-500">Weekly summary reports from Expirova</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.emailNotifications}
                    onChange={() => handleToggle('emailNotifications')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                </label>
              </div>

              {/* Timing Selector */}
              <div className="p-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Reminder Timing</label>
                <select 
                  value={preferences.reminderTiming}
                  onChange={handleTimingChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-800 focus:ring-1 focus:ring-blue-700 focus:border-blue-700 outline-none"
                >
                  <option value="30, 14, 7, 1 day">30, 14, 7, 1 day</option>
                  <option value="14, 7, 3, 1 day">14, 7, 3, 1 day</option>
                  <option value="7, 3, 1 day">7, 3, 1 day</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-700">security</span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Security & Privacy</h3>
            </div>
            <div className="p-4 space-y-4">
              
              {/* Two-Factor Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-500">Secure your Expirova account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.twoFactor}
                    onChange={() => handleToggle('twoFactor')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-700"></div>
                </label>
              </div>

              <button type="button" className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-sm font-medium text-gray-800">Change Password</span>
                <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>

              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Recent Activity</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray-500">
                    <span className="material-symbols-outlined text-[20px]">smartphone</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Logged in from iPhone 15</p>
                      <p className="text-xs text-gray-400">London, UK {"\u2022"} 2 hours ago</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Session Management Section */}
          <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-700">devices</span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Session Management</h3>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Current Session</h4>
                <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-blue-700">smartphone</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">iPhone 15 {"\u2022"} London, UK</p>
                      <p className="text-xs text-green-700 font-medium mt-0.5">Active now</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Other Active Sessions</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex gap-3">
                      <span className="material-symbols-outlined text-gray-500">desktop_windows</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-900">Chrome on MacOS</p>
                        <p className="text-xs text-gray-400">192.168.1.45 {"\u2022"} 2h ago</p>
                      </div>
                    </div>
                    <button type="button" className="text-blue-700 font-medium text-xs px-2 py-1 hover:bg-blue-50 rounded transition-colors">Logout</button>
                  </li>
                </ul>
              </div>

              <div className="pt-2 space-y-3">
                <button type="button" className="w-full py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Logout from All Devices</button>
                <button type="button" className="w-full py-2 text-red-600 font-medium text-sm hover:bg-red-50 rounded-lg transition-colors" onClick={() => setIsLogoutModalOpen(true)}>Logout from This Device</button>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Sticky Save Bar - Width matches the max-w-6xl container layout dynamically */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md z-40 border-t border-gray-200 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <button 
            type="button" 
            onClick={handleSaveChanges}
            className="w-full bg-blue-700 text-white py-3 rounded-full font-semibold shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">save</span>
            Save Changes
          </button>
        </div>
      </div>

      {/* Logout Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsLogoutModalOpen(false)}></div>
          <div className="relative w-full max-w-sm p-4 mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sign Out</h3>
              <p className="text-sm text-gray-500 mb-6">Are you sure you want to log out from Expirova? Any unsaved changes will be lost.</p>
              <div className="flex flex-col gap-3">
                <button type="button" className="w-full bg-red-600 text-white py-3 rounded-full text-sm font-medium shadow-sm active:scale-95 transition-transform">Confirm Logout</button>
                <button type="button" className="w-full py-3 text-gray-500 text-sm font-medium hover:bg-gray-50 rounded-full transition-colors" onClick={() => setIsLogoutModalOpen(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}