export function Aiscancontent() {
  return (
    <main
      className="relative w-full min-h-screen overflow-y-auto"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Status */}
      <div className="pt-6 flex justify-center">
        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-[#97cbff] animate-ping"></div>

          <p className="text-white text-sm font-medium">
            Scanning label...
          </p>
        </div>
      </div>

      {/* Scanner */}
      <div className="flex items-center justify-center px-8 py-10">

        <div
          className="w-full max-w-sm aspect-square relative rounded-xl overflow-hidden"
          style={{
            border: "2px solid rgba(255,255,255,0.4)",
            boxShadow: "0 0 0 4000px rgba(0,0,0,0.5)",
          }}
        >
          {/* Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#97cbff] rounded-tl-lg"></div>

          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#97cbff] rounded-tr-lg"></div>

          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#97cbff] rounded-bl-lg"></div>

          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#97cbff] rounded-br-lg"></div>

          {/* Scan Line */}
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              height: "2px",
              background: "#6bd8cb",
              boxShadow: "0 0 15px #6bd8cb",
              animation: "scanMove 3s ease-in-out infinite",
            }}
          />

          {/* Detection */}
          <div className="absolute top-1/4 left-1/4 w-32 h-6 border border-[#97cbff]/40 bg-[#0d5f94]/20 backdrop-blur-sm rounded px-2 flex items-center gap-2 animate-pulse">

            <span className="w-2 h-2 rounded-full bg-[#97cbff]"></span>

            <span className="text-[10px] text-white uppercase tracking-wider">
              Item Detect
            </span>

          </div>

          <div className="absolute bottom-1/3 right-1/4 w-28 h-6 border border-orange-300/40 bg-orange-400/10 backdrop-blur-sm rounded px-2 flex items-center gap-2">

            <span className="w-2 h-2 rounded-full bg-orange-300"></span>

            <span className="text-[10px] text-white uppercase tracking-wider">
              Exp Date
            </span>

          </div>
        </div>
      </div>

      {/* Data Cards */}
      <div className="px-4 pb-10">

        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">

          <div className="col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">

            <div className="flex items-center gap-3">

              <div className="p-2 bg-[#0d5f94]/30 rounded-lg">

                <span className="material-symbols-outlined text-[#97cbff]">
                  inventory_2
                </span>

              </div>

              <div>
                <p className="text-white/60 text-xs uppercase">
                  Detected Item
                </p>

                <h3 className="text-white text-xl font-semibold">
                  Amoxicillin 500mg
                </h3>
              </div>

            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">

            <p className="text-white/60 text-xs uppercase">
              Expiry
            </p>

            <div className="flex items-center gap-2 mt-1">

              <span className="material-symbols-outlined text-orange-300">
                event
              </span>

              <p className="text-white font-medium">
                OCT 2025
              </p>

            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">

            <p className="text-white/60 text-xs uppercase">
              Batch ID
            </p>

            <div className="flex items-center gap-2 mt-1">

              <span className="material-symbols-outlined text-[#97cbff]">
                qr_code_2
              </span>

              <p className="text-white font-medium">
                #BTH-9921-X
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Controls */}
      <div className="sticky bottom-6 w-full px-4 pb-8 flex justify-between items-center">

        <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">

          <span className="material-symbols-outlined">
            flashlight_on
          </span>

        </button>

        <div className="relative">

          <div className="absolute inset-0 bg-[#0d5f94]/20 rounded-full animate-pulse scale-125"></div>

          <button className="relative w-20 h-20 rounded-full bg-white border-4 border-[#0d5f94] p-1 shadow-2xl">

            <div className="w-full h-full rounded-full bg-[#0d5f94] flex items-center justify-center text-white">

              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                photo_camera
              </span>

            </div>

          </button>

        </div>

        <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=100&q=80"
            alt="Recent Scan"
            className="w-full h-full object-cover"
          />

        </button>

      </div>

      <style>
        {`
          @keyframes scanMove {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(280px); }
          }
        `}
      </style>
    </main>
  );
}