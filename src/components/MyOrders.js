import React from 'react';
import './MyOrders.css';

const ordersData = [
  {
    orderId: 'ORD12345',
    orderDate: '2023-10-01',
    items: [
      { name: 'Product A', quantity: 1, price: 29.99 },
      { name: 'Product B', quantity: 2, price: 19.99 },
    ],
    total: 69.97,
    status: 'Delivered',
  },
  {
    orderId: 'ORD12346',
    orderDate: '2023-10-10',
    items: [
      { name: 'Product C', quantity: 1, price: 49.99 },
    ],
    total: 49.99,
    status: 'In Transit',
  },
  {
    orderId: 'ORD12347',
    orderDate: '2023-10-15',
    items: [
      { name: 'Product D', quantity: 1, price: 59.99 },
      { name: 'Product E', quantity: 1, price: 39.99 },
    ],
    total: 99.98,
    status: 'Processing',
  },
];

const MyOrders = () => {
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      {ordersData.map((order) => (
        <div key={order.orderId} className="order-card">
          <div className="order-header">
            <span>Order ID: {order.orderId}</span>
            <span>Status: {order.status}</span>
          </div>
          <p>Order Date: {order.orderDate}</p>
          <h4>Items:</h4>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
          <h4>Total: ${order.total.toFixed(2)}</h4>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
