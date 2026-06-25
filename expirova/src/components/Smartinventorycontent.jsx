import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

export function Smartinventorycontent() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [sortBy, setSortBy] = useState("FEFO");
  const [menuOpen, setMenuOpen] = useState(null);

  const items = [
    {
      status: "URGENT",
      categoryType: "Food & Dairy",
      statusColor: "bg-red-100 text-red-700",
      borderColor: "border-l-red-600",
      title: "Greek Yogurt",
      category: "Food & Dairy",
      expiry: "2 Days",
      location: "Unit 4, Fridge B",
      icon: "restaurant",
      valueColor: "text-red-600",
    },
    {
      status: "WARNING",
      categoryType: "Vaccine",
      statusColor: "bg-orange-100 text-orange-700",
      borderColor: "border-l-amber-500",
      title: "Influenza Vax",
      category: "Vaccine | Batch #V09",
      expiry: "14 Days",
      location: "Cold Chain Lab 1",
      icon: "vaccines",
      valueColor: "text-amber-600",
    },
    {
      status: "STABLE",
      categoryType: "Medicine",
      statusColor: "bg-blue-100 text-[#0d5f94]",
      borderColor: "border-l-[#0d5f94]",
      title: "Amoxicillin 500mg",
      category: "Medicine | Batch #AX123",
      expiry: "12 Oct 2024",
      location: "Pharmacy Shelf G-2",
      icon: "medication",
      valueColor: "text-[#0d5f94]",
    },
    {
      status: "STABLE",
      categoryType: "IV Fluid",
      statusColor: "bg-blue-100 text-[#0d5f94]",
      borderColor: "border-l-[#0d5f94]",
      title: "Saline Solution 1L",
      category: "IV Fluid | Batch #SL99",
      expiry: "05 Jan 2025",
      location: "ER Supply Bay",
      icon: "medical_services",
      valueColor: "text-[#0d5f94]",
    },
    {
      status: "STABLE",
      categoryType: "Medicine",
      statusColor: "bg-blue-100 text-[#0d5f94]",
      borderColor: "border-l-[#0d5f94]",
      title: "Paracetamol 650mg",
      category: "Medicine | Batch #PC44",
      expiry: "20 Feb 2025",
      location: "Rack A-3",
      icon: "medication",
      valueColor: "text-[#0d5f94]",
    },
    {
      status: "STABLE",
      categoryType: "Medical Supply",
      statusColor: "bg-blue-100 text-[#0d5f94]",
      borderColor: "border-l-[#0d5f94]",
      title: "Syringe Pack",
      category: "Medical Supply",
      expiry: "10 Jun 2026",
      location: "Storage Room",
      icon: "vaccines",
      valueColor: "text-[#0d5f94]",
    },
  ];
  const [inventoryItems, setInventoryItems] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem("inventoryItems")) || [];

    return [...items, ...savedItems.filter((item) => item.title)];
  });

  const categories = [
    "All",
    "Medicine",
    "Food & Dairy",
    "Medical Supply",
    "IV Fluid",
    "Vaccine",
  ];
  const locations = [
    "All",
    "Unit 4, Fridge B",
    "Cold Chain Lab 1",
    "Pharmacy Shelf G-2",
    "ER Supply Bay",
    "Rack A-3",
    "Storage Room",
  ];

  const statusPills = [
    {
      label: "All",
      active: "bg-slate-800 text-white",
      inactive: "bg-white text-slate-600 border border-slate-200",
    },
    {
      label: "URGENT",
      active: "bg-red-600 text-white",
      inactive: "bg-white text-red-600 border border-red-200",
    },
    {
      label: "WARNING",
      active: "bg-amber-500 text-white",
      inactive: "bg-white text-amber-600 border border-amber-200",
    },
    {
      label: "STABLE",
      active: "bg-[#0d5f94] text-white",
      inactive: "bg-white text-[#0d5f94] border border-blue-200",
    },
  ];
  const removeItem = (title) => {
    const updatedItems = inventoryItems.filter((item) => item.title !== title);

    setInventoryItems(updatedItems);

    const userItems = updatedItems.filter((item) => item.id);

    localStorage.setItem("inventoryItems", JSON.stringify(userItems));

    setMenuOpen(null);
  };

  const filteredItems = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let filtered = inventoryItems.filter((item) => {
      // Search
      const matchesSearch =
        !keyword ||
        [
          item.title,
          item.category,
          item.categoryType,
          item.location,
          item.status,
        ]
          .join(" ")
          .toLowerCase()
          .includes(keyword);

      // Category
      const matchesCategory =
        categoryFilter === "All" ||
        item.categoryType?.trim().toLowerCase() ===
          categoryFilter.trim().toLowerCase();

      // Status
      const matchesStatus =
        statusFilter === "All" ||
        item.status?.trim().toLowerCase() === statusFilter.trim().toLowerCase();

      // Location
      const matchesLocation =
        locationFilter === "All" ||
        item.location?.trim().toLowerCase() ===
          locationFilter.trim().toLowerCase();

      return (
        matchesSearch && matchesCategory && matchesStatus && matchesLocation
      );
    });

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "Name A-Z":
          return a.title.localeCompare(b.title);

        case "Latest Expiry":
          return (
            new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime()
          );

        case "FEFO":
          return (
            new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
          );

        default:
          return 0;
      }
    });

    return filtered;
  }, [
    inventoryItems,
    search,
    categoryFilter,
    statusFilter,
    locationFilter,
    sortBy,
  ]);
  return (
    <main className="w-full bg-[#f8fafc] px-4 pt-24 pb-28">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">Total Items</p>
          <h2 className="text-3xl font-bold text-slate-900">
            {inventoryItems.length}
          </h2>
        </div>
        <div className="bg-red-50 rounded-xl p-4 shadow-sm">
          <p className="text-sm text-red-500">Urgent</p>
          <h2 className="text-3xl font-bold text-red-600">
            {inventoryItems.filter((i) => i.status === "URGENT").length}
          </h2>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 shadow-sm">
          <p className="text-sm text-orange-500">Warning</p>
          <h2 className="text-3xl font-bold text-orange-500">
            {inventoryItems.filter((i) => i.status === "WARNING").length}
          </h2>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
          <p className="text-sm text-[#0d5f94]">Stable</p>
          <h2 className="text-3xl font-bold text-[#0d5f94]">
            {inventoryItems.filter((i) => i.status === "STABLE").length}
          </h2>
        </div>
      </div>

      {/* Filter Bar */}
      <section className="mb-5">
        {/* Search */}
        <div className="relative mb-3">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search item, batch, or location..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d5f94] shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-wrap mb-3">
          {statusPills.map(({ label, active, inactive }) => (
            <button
              key={label}
              type="button"
              onClick={() => setStatusFilter(label)}
              className={`
        px-4 py-2 rounded-full text-sm font-semibold
        transition-all duration-200
        hover:scale-105 active:scale-95
        ${statusFilter === label ? active : inactive}
      `}
            >
              {label === "All" ? "All Status" : label}
            </button>
          ))}
        </div>

        {/* Dropdowns Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Category */}
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              style={{ fontSize: "15px" }}
            >
              category
            </span>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="
      w-full
      appearance-none
      bg-white
      border border-gray-200
      rounded-xl
      pl-10
      pr-10
      py-2.5
      text-sm
      font-medium
      text-gray-600
      cursor-pointer
      transition-all
      duration-300
      hover:bg-blue-50
      hover:border-[#0d5f94]
      hover:text-[#0d5f94]
      focus:bg-blue-50
      focus:border-[#0d5f94]
      focus:text-[#0d5f94]
      focus:ring-2
      focus:ring-[#0d5f94]/20
      focus:outline-none
    "
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "Category" : c}
                </option>
              ))}
            </select>

            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              style={{ fontSize: "18px" }}
            >
              expand_more
            </span>
          </div>

          {/* Location */}
          <div className="relative">
            <span
              className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              style={{
                fontSize: "16px",
                fontVariationSettings: "'FILL' 0, 'wght' 300",
              }}
            >
              location_on
            </span>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="
      w-full
      appearance-none
      bg-white
      border
      border-gray-200
      rounded-xl
      pl-11
      pr-10
      py-3
      text-sm
      font-medium
      text-gray-600
      cursor-pointer
      transition-all
      duration-300
      hover:bg-[#e6f2fa]
      hover:border-[#0d5f94]
      hover:text-[#0d5f94]
      focus:bg-[#e6f2fa]
      focus:border-[#0d5f94]
      focus:text-[#0d5f94]
      focus:ring-2
      focus:ring-[#0d5f94]/20
      focus:outline-none
    "
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l === "All" ? "Location" : l}
                </option>
              ))}
            </select>

            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              style={{ fontSize: "18px" }}
            >
              expand_more
            </span>
          </div>

          {/* Sort */}
          <div className="relative col-span-2 md:col-span-1">
            <span
              className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              style={{ fontSize: "15px" }}
            >
              sort
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
      w-full
      appearance-none
      bg-white
      border border-gray-200
      rounded-xl
      pl-10
      pr-10
      py-2.5
      text-sm
      font-medium
      text-gray-600
      cursor-pointer
      transition-all
      duration-300
      hover:bg-blue-50
      hover:border-[#0d5f94]
      hover:text-[#0d5f94]
      focus:bg-blue-50
      focus:border-[#0d5f94]
      focus:text-[#0d5f94]
      focus:ring-2
      focus:ring-[#0d5f94]/20
      focus:outline-none
    "
            >
              <option value="FEFO">FEFO</option>
              <option value="Latest Expiry">Latest Expiry</option>
              <option value="Name A-Z">Name A-Z</option>
            </select>

            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              style={{ fontSize: "18px" }}
            >
              expand_more
            </span>
          </div>
        </div>

        {/* Result count + active filters */}
        <div className="flex items-center justify-between mt-3 px-1">
          <p className="text-sm text-gray-400">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredItems.length}
            </span>{" "}
            of {inventoryItems.length} items
          </p>
          {(categoryFilter !== "All" ||
            locationFilter !== "All" ||
            statusFilter !== "All" ||
            search) && (
            <button
              onClick={() => {
                setCategoryFilter("All");
                setStatusFilter("All");
                setLocationFilter("All");
                setSearch("");
              }}
              className="text-sm text-[#0d5f94] font-medium hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <span className="material-symbols-outlined text-5xl mb-3">
            inventory_2
          </span>
          <p className="text-lg font-medium text-gray-500">
            No items match your filters
          </p>
          <p className="text-sm mt-1">
            Try adjusting your search or clearing the filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-5 border-l-4 ${item.borderColor} shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex justify-between mb-3">
                <span
                  className={`${item.statusColor} px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide`}
                >
                  {item.status}
                </span>
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(menuOpen === index ? null : index);
                    }}
                    className="p-1.5 rounded-full hover:bg-gray-100 transition"
                  >
                    <span className="material-symbols-outlined text-slate-800">
                      more_vert
                    </span>
                  </button>

                  {menuOpen === index && (
                    <div className="absolute right-0 top-8 z-50 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px]">
                      <button
                        onClick={() => removeItem(item.title)}
                        className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition"
                      >
                        <span className="material-symbols-outlined text-sm">
                          delete
                        </span>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <div className="flex items-center gap-1.5 text-gray-500 mt-1 text-sm">
                <span className="material-symbols-outlined text-[16px]">
                  {item.icon}
                </span>
                {item.category}
              </div>

              <div className="mt-6 pt-4 border-t flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                    {item.status === "STABLE" ? "Expiry Date" : "Expiring In"}
                  </p>
                  <p className={`text-xl font-bold ${item.valueColor}`}>
                    {item.expiry}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-0.5">Location</p>
                  <p className="font-medium text-slate-700 text-sm">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Scan Button */}
      <Link
        to="/aiscan"
        className="fixed bottom-20 right-4 bg-[#0d5f94] text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#0b527f] active:scale-95 transition-all"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          barcode_scanner
        </span>
        <span className="font-semibold text-lg">Scan New Item</span>
      </Link>
    </main>
  );
}
