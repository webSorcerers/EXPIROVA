import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">

      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-slate-600">
          menu
        </span>

        <h1 className="text-xl font-bold text-blue-900">
          Expirova
        </h1>
      </div>

      <div className="flex items-center gap-3 relative">

        {/* <Link to="/alerts">
          <span className="material-symbols-outlined text-slate-700">
            notifications
          </span>
        </Link> */}
<button
  onClick={() => setShowDropdown(!showDropdown)}
  className="w-9 h-9 rounded-full bg-[#0d5f94] flex items-center justify-center text-white hover:bg-[#0b527f] transition"
>
  <span className="material-symbols-outlined">
    account_circle
  </span>
</button>

        {showDropdown && (
          <div className="absolute right-0 top-12 bg-white border rounded-xl shadow-lg w-48">
            <Link
              to="/profile"
              className="block px-4 py-3 hover:bg-gray-100"
            >
              Profile
            </Link>

            {/* <Link
              to="/settings"
              className="block px-4 py-3 hover:bg-gray-100"
            >
              Settings
            </Link> */}
          </div>
        )}
      </div>
    </header>
  );
}