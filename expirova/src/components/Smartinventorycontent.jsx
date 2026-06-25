import { useEffect, useState } from "react";
import API from "../api/axios";

export function Smartinventorycontent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await API.get("/products");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">
        Inventory
      </h2>

      <div className="grid gap-4">
        {items.length === 0 ? (
          <div className="bg-white p-4 rounded-xl shadow">
            No products found
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h3 className="font-bold text-xl">
                {item.productName}
              </h3>

              <p>
                <strong>Category:</strong>{" "}
                {item.category}
              </p>

              <p>
                <strong>Expiry:</strong>{" "}
                {new Date(item.expiryDate).toLocaleDateString()}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {item.status}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}