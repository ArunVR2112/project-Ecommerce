import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { orderProductBackend } from './Fetchhook.js';
import AppContext from './OrderAppContext.js';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AppContext); 

  const orderProduct = async (product, quantity, date) => {
    if (user?.status !== 200) { // Check if user is defined
      toast.error('Please log in to place an order.');
      return;
    }

    try {
      await orderProductBackend({ ...product, quantity, date, userId: user.data.userinfoid });
      toast.success('Order placed successfully');
      setOrders(prevOrders => [...prevOrders, { ...product, quantity, date }]);
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('There was an error placing the order');
    }
  };

  return (
    <OrderContext.Provider value={{ orderProduct }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
