import React, { useState } from 'react';
import UpdateTicketsList from '../Tickets/UpdateTicketsList'

function AdminWeb() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'ticket 1',
      destination: 'New York',
      date: '2024-04-15',
      time: '08:00',
      price: 500
    },
    {
      id: 2,
      name: 'ticket 2',
      destination: 'London',
      date: '2024-05-20',
      time: '10:30',
      price: 700
    },
    {
      id: 3,
      name: 'ticket 3',
      destination: 'Tokyo',
      date: '2024-06-10',
      time: '14:45',
      price: 1000
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    id: null,
    name:'',
    destination: '',
    date: '',
    time: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.destination || !newProduct.date || !newProduct.time || !newProduct.price) {
      alert('Alla fält är obligatoriska.');
      return;
    }

    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const updatedProducts = [...products, { id, ...newProduct }];
    setProducts(updatedProducts);
    setNewProduct({
      id: null,
      name:'',
      destination: '',
      date: '',
      time: '',
      price: ''
    });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Administration</h1>
      <div>
        <h2>Lägg till produkt</h2>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Destination:</label>
          <input type="text" name="destination" value={newProduct.destination} onChange={handleInputChange} />
        </div>
        <div>
          <label>Datum:</label>
          <input type="date" name="date" value={newProduct.date} onChange={handleInputChange} />
        </div>
        <div>
          <label>Tid:</label>
          <input type="time" name="time" value={newProduct.time} onChange={handleInputChange} />
        </div>
        <div>
          <label>Pris:</label>
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
        </div>
        <button onClick={handleAddProduct}>Lägg till produkt</button>
      </div>
      <div>
        <h2>Produkter/Tjänster</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div>Destination: {product.destination}</div>
              <div>Datum: {product.date}</div>
              <div>Tid: {product.time}</div>
              <div>Pris: {product.price} USD</div>
              <button onClick={() => handleDeleteProduct(product.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      </div>
      <UpdateTicketsList tickets={products} setTickets={setProducts} />
    </div>
  );
}
export default AdminWeb;