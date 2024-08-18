export const orderProductBackend = async (orderData) => {
    const response = await fetch('http://localhost:8080/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to place order');
    }
  
    return response.json();
  };
  