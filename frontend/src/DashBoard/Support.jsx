// src/OrderSupportPage.js
import React, { useState } from 'react';

const OrderSupportPage = () => {
  const [orderId, setOrderId] = useState('');
  const [issue, setIssue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Order ID:', orderId);
    console.log('Issue:', issue);
    console.log('Message:', message);
    // Example: Send data to a server or API
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Order Support</h1>
      <p className="text-lg mb-6">If you need help with an order, please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">Order ID</label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Issue</label>
          <select
            id="issue"
            name="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="">Select an issue</option>
            <option value="shipping">Shipping Issue</option>
            <option value="damaged">Damaged Item</option>
            <option value="missing">Missing Item</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OrderSupportPage;
