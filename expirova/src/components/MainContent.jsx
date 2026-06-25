import { Link } from "react-router-dom";
import { useState } from "react";
export function MainContent() {
  const [showAddModal, setShowAddModal] = useState(false);

const [newItem, setNewItem] = useState({
  name: "",
  category: "",
  location: "",
  expiryDate: "",
});

return ( <>
<main className="px-3 py-4 mt-14 pb-28 bg-[#f3f4f6] min-h-screen">

 
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

   

<Link to="/aiscan">
  <button className="bg-[#0d5f94] text-white rounded-2xl py-4 flex items-center justify-center gap-2 shadow-md hover:bg-[#0b527f] transition w-full">
    <span className="material-symbols-outlined">
      qr_code_scanner
    </span>
    Start Scan
  </button>
</Link>

      <button
  onClick={() => setShowAddModal(true)}
  className="bg-[#dce9ff] border border-[#c1d8f5] text-slate-800 rounded-2xl py-4 flex items-center justify-center gap-2 shadow-sm hover:bg-[#cfe1ff] transition"
>
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

      {/* <button className="text-[#0d5f94] text-sm font-medium">
        View All
      </button> */}
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
  
   <Link
  to="/aiscan"
 className="fixed bottom-20 right-4 bg-[#0d5f94] text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#0b527f] transition">

  <span
    className="material-symbols-outlined"
    style={{
      fontVariationSettings: "'FILL' 1",
    }}
  >
    barcode_scanner
  </span>

  <span className="font-semibold text-lg">
          QUICK SCAN
  </span>
</Link>

</main>
 {/* Modal goes HERE */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl">

            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold text-slate-800">
                Add Inventory Item
              </h2>

              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <span className="material-symbols-outlined">
                  close
                </span>
              </button>
            </div>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    name: e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#0d5f94]"
              />

              <select
                value={newItem.category}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    category: e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl p-3"
              >
                <option value="">Select Category</option>
                <option value="Medicine">Medicine</option>
                <option value="Medical Supply">Medical Supply</option>
                <option value="IV Fluid">IV Fluid</option>
                <option value="Vaccine">Vaccine</option>
                <option value="Food & Dairy">Food & Dairy</option>
              </select>

              <input
                type="text"
                placeholder="Location"
                value={newItem.location}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    location: e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl p-3"
              />

              <input
                type="date"
                value={newItem.expiryDate}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    expiryDate: e.target.value,
                  })
                }
                className="w-full border border-gray-200 rounded-xl p-3"
              />

              <div className="flex gap-3 pt-2">
               <button
  onClick={() => setShowAddModal(false)}
  className="
    flex-1
    border border-gray-200
    py-3
    rounded-xl
    font-medium
    text-slate-700
    transition-all duration-200
    hover:bg-blue-50
    hover:border-[#0d5f94]
    hover:text-[#0d5f94]
    focus:bg-blue-50
    focus:border-[#0d5f94]
    focus:text-[#0d5f94]
    active:bg-[#0d5f94]
    active:text-white
  "
>
  Cancel
</button>

              <button
  onClick={() => {
    const existingItems =
      JSON.parse(localStorage.getItem("inventoryItems")) || [];

    const item = {
      id: Date.now(),
      title: newItem.name,
      categoryType: newItem.category,
      location: newItem.location,
      expiryDate: newItem.expiryDate,
      status: "STABLE",
    };

    localStorage.setItem(
      "inventoryItems",
      JSON.stringify([...existingItems, item])
    );

    setShowAddModal(false);

    setNewItem({
      name: "",
      category: "",
      location: "",
      expiryDate: "",
    });
  }}

  className="
    flex-1
    bg-[#0d5f94]
    hover:bg-[#0b527f]
    text-white
    py-3
    rounded-xl
    font-semibold
    shadow-sm
    transition-all duration-200
    hover:shadow-md
    hover:-translate-y-0.5
    active:scale-95
    focus:outline-none
    focus:ring-2
    focus:ring-[#0d5f94]/30
  "
>
  Add Item
</button>
              </div>

            </div>

          </div>    
        </div>
      )}
    </>
  );
}
