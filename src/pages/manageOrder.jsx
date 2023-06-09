import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style/manageOrders.css"

const ManageOrders = () => {
  const getCookieValue = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  };

  const [orders, setOrders] = useState([]);
  const [cancellationStatus, setCancellationStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cancelOrder = async (orderId) => {
    try {
      const response = await fetch(
        `https://inventryapp-production.up.railway.app/catalog/order/${orderId}/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            orderId: orderId,
            status: "cancelled",
            paymentStatus: "refunded"
          })
        }
      );
      console.log("Order cancelled");
      setCancellationStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const email = getCookieValue("email");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://inventryapp-production.up.railway.app/catalog/your-order/${email}`,
          { mode: "cors" }
        );
        const data = await response.json();
        setOrders(data.orders);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cancellationStatus]);

  return (
    <div className="manageOrders">
      <h1>Your Orders</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="orderTable">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Cart Items</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>
                  <ul>
                    {order.cart.map((item) => (
                      <li key={uuidv4()}>
                        {item.name}, {item.size}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  {order.cart.map((item) => (
                    item.quantity
                  ))}
                </td>
                <td>{order.totalPrice}$</td>
                <td>{order.status}</td>
                <td>
                  {order.status !== "cancelled" ? (
                    <p
                      className="cancelBtn"
                      onClick={() => {
                        cancelOrder(order._id);
                      }}
                      id={order._id}
                    >
                      Cancel
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <style jsx>{`
        .orderTable {
          width: 100%;
          border-collapse: collapse;
        }

        .orderTable th,
        .orderTable td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }

        .orderTable th {
          text-align: left;
        }

        .manageOrders {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default ManageOrders;
