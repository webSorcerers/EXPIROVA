export function Smartinventorycontent() {
  const items = [
    {
      status: "URGENT",
      statusColor: "bg-red-100 text-red-700",
      borderColor: "border-l-red-600",
      title: "Greek Yogurt",
      category: "Food & Dairy",
      expiry: "2 Days",
      location: "Unit 4, Fridge B",
      icon: "restaurant",
      valueColor: "text-green-800",
    },
    {
      status: "WARNING",
      statusColor: "bg-orange-100 text-orange-700",
      borderColor: "border-l-amber-600",
      title: "Influenza Vax",
      category: "Vaccine | Batch #V09",
      expiry: "14 Days",
      location: "Cold Chain Lab 1",
      icon: "vaccines",
      valueColor: "text-amber-700",
    },
    {
      status: "STABLE",
      statusColor: "bg-[#0d5f94] text-[#b1d7ff]",
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
      statusColor: "bg-[#0d5f94] text-[#b1d7ff]",
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
      statusColor: "bg-[#0d5f94] text-[#b1d7ff]",
      borderColor: "border-l-[#0d5f94]",
      title: "Paracetamol 650mg",
      category: "Medicine | Batch #PC44",
      expiry: "20 Feb 2025",
      location: "Rack A-3",
      icon: "pill",
      valueColor: "text-[#0d5f94]",
    },
    {
      status: "STABLE",
      statusColor: "bg-[#0d5f94] text-[#b1d7ff]",
      borderColor: "border-l-[#0d5f94]",
      title: "Syringe Pack",
      category: "Medical Supply",
      expiry: "10 Jun 2026",
      location: "Storage Room",
      icon: "vaccines",
      valueColor: "text-[#0d5f94]",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] px-4 py-6">

      {/* Search */}
      <section className="mb-6">
        <div className="flex flex-col gap-4">

          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>

            <input
              type="text"
              placeholder="Search batch, item, or location..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d5f94]"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            <button className="px-4 py-2 bg-[#e5eeff] rounded-full whitespace-nowrap">
              Category
            </button>

            <button className="px-4 py-2 bg-[#e5eeff] rounded-full whitespace-nowrap">
              Status
            </button>

            <button className="px-4 py-2 bg-[#e5eeff] rounded-full whitespace-nowrap">
              Location
            </button>

            <button className="px-4 py-2 bg-[#0d5f94] text-[#b1d7ff] rounded-full whitespace-nowrap">
              FEFO (Expiry)
            </button>
          </div>

        </div>
      </section>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-xl p-5 border-l-4 ${item.borderColor} shadow-sm hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex justify-between mb-3">

              <span
                className={`${item.statusColor} px-2 py-1 rounded text-xs font-semibold`}
              >
                {item.status}
              </span>

              <span className="material-symbols-outlined text-gray-400">
                more_vert
              </span>

            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <span className="material-symbols-outlined text-[16px]">
                {item.icon}
              </span>

              {item.category}
            </div>

            <div className="mt-6 pt-4 border-t flex justify-between">

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  {item.status === "STABLE"
                    ? "Expiry Date"
                    : "Expiring In"}
                </p>

                <p className={`text-xl font-bold ${item.valueColor}`}>
                  {item.expiry}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400">
                  Location
                </p>

                <p className="font-medium">
                  {item.location}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Floating Button */}
      <button className="fixed bottom-24 right-6 z-50 bg-[#0d5f94] text-[#b1d7ff] px-6 py-4 rounded-full shadow-xl flex items-center gap-3 hover:bg-[#0b527f] transition-all">

        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          barcode_scanner
        </span>

        <span className="font-semibold">
          Scan New Item
        </span>

      </button>

    </main>
  );
}