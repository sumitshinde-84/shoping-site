import { useEffect } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      const email = getCookieValue("email");
      const response = await fetch(
        "https://inventryapp-production.up.railway.app/catalog/orders/send",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="manageOrders">
      <h1>Your Orders</h1>
    </div>
  );
};

export default ManageOrders;
