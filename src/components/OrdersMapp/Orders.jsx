import React, { useState } from 'react';
import '../../assets/orders.css';

export default function Orders() {
  const [orderData, setOrderData] = useState({
    // Definiera nödvändiga fält för beställningen här
    productName: '',
    quantity: 0,
    // ...
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implementera anrop till backend för att skicka beställningen
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Lägg till eventuella autentiseringsheadrar om det behövs
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      console.log('Beställning skickad:', data);
      // Återställ formuläret efter att beställningen skickats
      setOrderData({
        productName: '',
        quantity: 0,
        // ...
      });
    } catch (error) {
      console.error('Fel vid beställning:', error);
    }
  };

  return (
    <div className='Order-from-1'>
      <h1>Order Form</h1>
      <form className='form-orders-2' onSubmit={handleSubmit}>
        <input
          className='input-1'
          type="text"
          placeholder="Product Name"
          value={orderData.productName}
          onChange={(e) => setOrderData({ ...orderData, productName: e.target.value })}
        />
        <input
          className='input-2'
          type="number"
          placeholder="Quantity"
          value={orderData.quantity}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value);
            if (!isNaN(newQuantity) && newQuantity >= 1) {
              setOrderData({ ...orderData, quantity: newQuantity });
            }
          }}
        />
        {/* Lägg till fler formulärfält för beställningen */}
        <button className='btn-orders-1' type="submit">Submit Order</button>
      </form>
    </div>
  );
}
