// import React, { useState, useEffect } from 'react';
// import CustomerManagement from './CustomerEditForm';
// import ProductManagement from './ProductEditForm';

// function AdminWeb() {
//   const [customers, setCustomers] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Funktion för att hämta kunder från backend
//     async function fetchCustomersFromBackend() {
//       try {
//         const response = await fetch('/api/customers');
//         if (!response.ok) {
//           throw new Error('Något gick fel vid hämtning av kunder');
//         }
//         const fetchedCustomers = await response.json();
//         setCustomers(fetchedCustomers);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     // Funktion för att hämta produkter från backend
//     async function fetchProductsFromBackend() {
//       try {
//         const response = await fetch('/api/products');
//         if (!response.ok) {
//           throw new Error('Något gick fel vid hämtning av produkter');
//         }
//         const fetchedProducts = await response.json();
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchCustomersFromBackend();
//     fetchProductsFromBackend();
//   }, []);

//   // Funktion för att uppdatera kunder
//   const updateCustomer = async (updatedCustomer) => {
//     try {
//       const response = await fetch(`/api/customers/${updatedCustomer.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedCustomer),
//       });
//       if (!response.ok) {
//         throw new Error('Något gick fel vid uppdatering av kund');
//       }
//       // Uppdatera den lokala kundlistan
//       const updatedCustomers = customers.map(customer =>
//         customer.id === updatedCustomer.id ? updatedCustomer : customer
//       );
//       setCustomers(updatedCustomers);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Funktion för att uppdatera produkter
//   const updateProduct = async (updatedProduct) => {
//     try {
//       const response = await fetch(`/api/products/${updatedProduct.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedProduct),
//       });
//       if (!response.ok) {
//         throw new Error('Något gick fel vid uppdatering av produkt');
//       }
//       // Uppdatera den lokala produktlistan
//       const updatedProducts = products.map(product =>
//         product.id === updatedProduct.id ? updatedProduct : product
//       );
//       setProducts(updatedProducts);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Administration</h1>
//       <div>
//         <h2>Kunder</h2>
//         <CustomerManagement customers={customers} onUpdate={updateCustomer} />
//       </div>
//       <div>
//         <h2>Produkter/Tjänster</h2>
//         <ProductManagement products={products} onUpdate={updateProduct} />
//       </div>
      
//     </div>
//   );
// }

// export default AdminWeb;
import React, { useState } from 'react';
import UpdateTicketsList from '../Tickets/UpdateTicketsList'

function AdminWeb() {
//   const [tickets, setTickets] = useState([
//     { id: 1, name: 'Ticket 1', description: 'Tokyo', price: 8020 },
//     { id: 2, name: 'Ticket 2', description: 'Sydney', price: 720 },
//     { id: 3, name: 'Ticket 3', description: 'Toronto', price: 730 },
//     { id: 4, name: 'Ticket 4', description: 'Stockholm', price: 990 },

// ]);
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

