export function MainContent() {
return ( <main className="px-3 py-4 mt-14 pb-28 bg-[#f3f4f6] min-h-screen">

 
  {/* Summary Cards */}
  <section className="grid grid-cols-2 gap-3">

    <div className="col-span-2 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <p className="text-gray-500 text-sm">
        Total Managed Items
      </p>

      <div className="flex items-end gap-2 mt-2">
        <h1 className="text-5xl font-bold text-slate-900">
          1,284
        </h1>

        <span className="text-[#0d5f94] font-medium text-sm mb-2">
          +12 this week
        </span>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-4 relative shadow-sm">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#a66a1f] rounded-l-2xl"></div>

      <p className="text-gray-500 text-sm">
        Expiring Soon
      </p>

      <h2 className="text-4xl font-bold text-[#a66a1f] mt-2">
        42
      </h2>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-4 relative shadow-sm">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 rounded-l-2xl"></div>

      <p className="text-gray-500 text-sm">
        Urgent Action
      </p>

      <h2 className="text-4xl font-bold text-red-600 mt-2">
        18
      </h2>
    </div>

  </section>

  {/* Quick Actions */}
  <section className="mt-6">

    <h2 className="text-3xl font-bold text-slate-800 mb-4">
      Quick Actions
    </h2>

    <div className="grid grid-cols-2 gap-3">

      <button className="bg-[#0d5f94] text-white rounded-2xl py-4 flex items-center justify-center gap-2 shadow-md hover:bg-[#0b527f] transition">
        <span className="material-symbols-outlined">
          qr_code_scanner
        </span>
        Start Scan
      </button>

      <button className="bg-[#dce9ff] border border-[#c1d8f5] text-slate-800 rounded-2xl py-4 flex items-center justify-center gap-2 shadow-sm">
        <span className="material-symbols-outlined">
          add
        </span>
        Manual Add
      </button>

    </div>

  </section>

  {/* Recent Scans */}
  <section className="mt-6">

    <div className="flex justify-between items-center mb-3">
      <h2 className="text-3xl font-bold text-slate-800">
        Recent Scans
      </h2>

      <button className="text-[#0d5f94] text-sm font-medium">
        View All
      </button>
    </div>

    <div className="space-y-3">

      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 flex justify-between items-center shadow-sm">

        <div className="flex gap-4 items-center">

          <div className="w-10 h-10 rounded-xl bg-[#e6f2fa] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#0d5f94]">
              medication
            </span>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Amoxicillin Batch #492
            </h3>

            <p className="text-sm text-gray-500">
              Scanned 2m ago
            </p>
          </div>

        </div>

        <span className="bg-[#d9ebf5] text-[#0d5f94] px-3 py-1 rounded-full text-sm font-medium">
          Valid
        </span>

      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 flex justify-between items-center shadow-sm">

        <div className="flex gap-4 items-center">

          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#a66a1f]">
              vaccines
            </span>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Insulin Glargine X2
            </h3>

            <p className="text-sm text-gray-500">
              Scanned 1h ago
            </p>
          </div>

        </div>

        <span className="bg-orange-100 text-[#a66a1f] px-3 py-1 rounded-full text-sm">
          Exp: 3d
        </span>

      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 flex justify-between items-center shadow-sm">

        <div className="flex gap-4 items-center">

          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-red-600">
              science
            </span>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Saline Solution 500ml
            </h3>

            <p className="text-sm text-gray-500">
              Scanned 4h ago
            </p>
          </div>

        </div>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm uppercase font-medium">
          Expired
        </span>

      </div>

    </div>

  </section>

  {/* Waste Prevention */}
  <section className="mt-6 bg-[#213146] text-white rounded-3xl p-5 relative overflow-hidden">

    <div className="flex justify-between">

      <div>
        <h2 className="text-3xl font-bold">
          Waste Prevention
        </h2>

        <p className="text-slate-300">
          This quarter's impact metrics
        </p>
      </div>

      <span className="material-symbols-outlined text-[#97cbff]">
        eco
      </span>

    </div>

    <div className="flex items-end gap-2 h-28 mt-8">

      <div className="flex-1 h-10 bg-[#0d5f94]/40 rounded-t-lg"></div>
      <div className="flex-1 h-14 bg-[#0d5f94]/40 rounded-t-lg"></div>
      <div className="flex-1 h-18 bg-[#0d5f94]/40 rounded-t-lg"></div>
      <div className="flex-1 h-24 bg-[#0d5f94] rounded-t-lg"></div>
      <div className="flex-1 h-12 bg-[#0d5f94]/40 rounded-t-lg"></div>

    </div>

    <div className="border-t border-slate-600 mt-4 pt-4 flex justify-between">

      <div>
        <h3 className="text-5xl font-bold text-[#b1d7ff]">
          24.8%
        </h3>

        <p className="text-slate-300">
          Loss Reduction
        </p>
      </div>

      <div className="text-right">
        <h3 className="text-5xl font-bold text-[#b1d7ff]">
          $4,200
        </h3>

        <p className="text-slate-300">
          Savings Est.
        </p>
      </div>

    </div>

  </section>

  {/* Floating Quick Scan Button */}
  <button className="fixed bottom-20 right-4 bg-[#0d5f94] text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#0b527f] transition">

    <span className="material-symbols-outlined">
      qr_code_scanner
    </span>

    <span className="font-semibold">
      QUICK SCAN
    </span>

  </button>

</main>

);
}
