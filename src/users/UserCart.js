import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCart = () => {
  const [userdashboard, setUserDashboard] = useState([]); // To store the fetched cart items
  const [quantities, setQuantities] = useState({}); //To manage quantity of each item

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    axios.get("http://localhost:8888/userdashboard").then((res) => {
      setUserDashboard(res.data);
      const initialQuantities = {}; //empty object to store initial quantities for each product.
      res.data.forEach((item) => {
        initialQuantities[item.id] = 1;
      });
      setQuantities(initialQuantities);
    });
  };

  const handleQuantityChange = (id, newQty) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(Number(newQty), 1),
    }));
  };

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1),
    }));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      axios
        .delete(`http://localhost:8888/userdashboard/${id}`)
        .then(() => {
          setUserDashboard((prev) => prev.filter((item) => item.id !== id));
          const updatedQuantities = { ...quantities };
          delete updatedQuantities[id];
          setQuantities(updatedQuantities);
        })
        .catch((err) => {
          console.error("Delete failed:", err);
          alert("Failed to remove item.");
        });
    }
  };

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">My Cart</h3>

      <table className="table table-bordered text-center align-middle shadow">
        <thead className="table-dark">
          <tr>
            <th>Sr No.</th>
            <th>Product</th>
            <th>Price</th>
            <th style={{ width: "180px" }}>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {userdashboard.map((item, index) => {
            const qty = quantities[item.id] || 1;
            console.log(qty);
            const total = item.price * qty;
            console.log(total);

            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={80}
                    className="img-thumbnail"
                  />
                </td>
                <td>₹{item.price}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleDecrement(item.id)}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={qty}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="form-control text-center mx-2"
                      style={{ width: "60px" }}
                    />
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>₹{total}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserCart;