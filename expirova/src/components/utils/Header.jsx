
import { Link } from "react-router-dom";

export function Header() {
  

  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">

      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[#0d5f94]">
  inventory_2
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
<Link
  to="/profile"
  className="
    w-10 h-10
    rounded-full
    bg-[#0d5f94]
    flex items-center justify-center
    text-white
    shadow-sm
    transition-all duration-200
    hover:bg-[#0b527f]
    hover:shadow-md
    hover:-translate-y-0.5
    active:scale-95
  "
>
  <span className="material-symbols-outlined">
    account_circle
  </span>
</Link>
        </div>
    </header>
  );
}