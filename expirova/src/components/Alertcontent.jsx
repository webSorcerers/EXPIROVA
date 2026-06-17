export function Alertcontent() {
  const urgentAlerts = [
    {
      id: 1,
      name: "Amoxicillin 500mg",
      batch: "#AMX-2024-001",
      quantity: "24 Units",
      expiry: "Oct 24, 2023",
      badge: "EXPIRES TOMORROW",
      primaryAction: "Mark as Used",
      secondaryAction: "Donate Now",
    },
    {
      id: 2,
      name: "Insulin Glargine",
      batch: "#INS-GL-992",
      quantity: "15 Vials",
      expiry: "Oct 24, 2023",
      badge: "EXPIRES TOMORROW",
      primaryAction: "Mark as Used",
      secondaryAction: "Transfer to NGO",
    },
  ];

  const warningAlerts = [
    {
      id: 3,
      name: "Lisinopril 10mg",
      batch: "#LIS-7731",
      quantity: "200 Units",
      expiry: "Nov 02, 2023",
      badge: "EXPIRES IN 10 DAYS",
      primaryAction: "Transfer to NGO",
      secondaryAction: "Donate Now",
    },
    {
      id: 4,
      name: "Surgical Masks",
      batch: "#PPE-MASK-102",
      quantity: "500 Units",
      expiry: "Nov 06, 2023",
      badge: "EXPIRES IN 14 DAYS",
      primaryAction: "Transfer to NGO",
      secondaryAction: "Mark as Used",
    },
  ];

  const AlertCard = ({
    name,
    batch,
    quantity,
    expiry,
    badge,
    primaryAction,
    secondaryAction,
    urgent = false,
  }) => (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div className="p-4">
        <div className="flex justify-between gap-3">
          <div>
            <h4 className="font-semibold text-on-surface">
              {name}
            </h4>

            <p className="text-sm text-on-surface-variant">
              Batch ID: {batch}
            </p>
          </div>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${
              urgent
                ? "bg-error-container text-on-error-container"
                : "bg-secondary-container text-on-secondary-container"
            }`}
          >
            {badge}
          </span>
        </div>

        <div className="flex gap-4 mt-3 text-sm text-on-surface-variant">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              inventory_2
            </span>
            {quantity}
          </div>

          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              calendar_today
            </span>
            {expiry}
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant p-3 bg-surface-container-low flex flex-col gap-2">
        <button className="w-full bg-primary text-on-primary py-2 rounded-lg font-medium">
          {primaryAction}
        </button>

        <button className="w-full border border-primary text-primary py-2 rounded-lg font-medium">
          {secondaryAction}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <main className="h-[calc(100vh-128px)] overflow-y-auto scroll-smooth px-4 py-4 pb-32">

        {/* Header */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-on-surface">
            Alert Center
          </h2>

          <p className="text-sm text-on-surface-variant mt-1">
            Manage items nearing expiration with immediate actions.
          </p>
        </section>

        {/* URGENT */}
        <section className="mb-8">
          <div className="sticky top-0 bg-background py-2 z-10 flex items-center gap-2">
            <span className="material-symbols-outlined text-error">
              error
            </span>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-error">
              Urgent (1 Day)
            </h3>
          </div>

          <div className="space-y-4">
            {urgentAlerts.map((alert) => (
              <AlertCard
                key={alert.id}
                {...alert}
                urgent
              />
            ))}
          </div>
        </section>

        {/* WARNING */}
        <section>
          <div className="sticky top-0 bg-background py-2 z-10 flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500">
              warning
            </span>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Warning (7–14 Days)
            </h3>
          </div>

          <div className="space-y-4">
            {warningAlerts.map((alert) => (
              <AlertCard
                key={alert.id}
                {...alert}
              />
            ))}
          </div>
        </section>
      </main>

    
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
    </>
  );
}