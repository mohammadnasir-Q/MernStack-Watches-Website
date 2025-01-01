import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
  try {
    const response = await axios.post(
      `${backendUrl}/api/order/status`,
      { orderId, status: event.target.value },
      { headers: { token } }
    );
    if (response.data.success) {
      await fetchAllOrders();
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || error.message);
  }
};

useEffect(() => {
  fetchAllOrders();
}, [token]);

  return (
<div>
  {orders.map((order, index) => (
    <div
      className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
      key={index}
    >
      <img className="w-12" src={assets.parcel_icon} alt="" />
      <div>
        <div>
          {order.items?.map((item, index) => (
            <p className="py-0.5" key={index}>
              {item.name} x {item.quantity} <span>{item.size}</span>
              {index !== order.items.length - 1 && ","}
            </p>
          )) || <p>No items available</p>}
        </div>
        <p className="mt-3 mb-2 font-medium">
          {order.address?.firstName && order.address?.lastName
            ? `${order.address.firstName} ${order.address.lastName}`
            : "No name available"}
        </p>
        <div>
          <p>{order.address?.street || "No street provided"}</p>
          <p>
            {(order.address?.city || "No city") + ", " +
              (order.address?.state || "No state") + ", " +
              (order.address?.country || "No country") + ", " +
              (order.address?.zipcode || "No zipcode")}
          </p>
        </div>
        <p>{order.address?.phone || "No phone provided"}</p>
      </div>
      <div>
        <p className="text-sm sm:text-[15px]">Items : {order.items?.length || 0}</p>
        <p className="mt-3">Method : {order.paymentMethod || "N/A"}</p>
        <p>Payment : {order.payment ? "Done" : "Pending"}</p>
        <p>
          Date :{" "}
          {order.date ? new Date(order.date).toLocaleDateString() : "Invalid date"}
        </p>
      </div>
      <p className="text-sm sm:text-[15px]">
        {currency} {order.amount || "0.00"}
      </p>
      <select
        onChange={(event) => statusHandler(event, order._id)}
        value={order.status || "Order Placed"}
        className="p-2 font-semibold"
      >
        <option value="Order Placed">Order Placed</option>
        <option value="Packing">Packing</option>
        <option value="Shipped">Shipped</option>
        <option value="Out for Delivery">Out for Delivery</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>
  ))}
</div>

  );
};

export default Orders;
