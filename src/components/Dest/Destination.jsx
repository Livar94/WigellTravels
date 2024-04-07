import React from 'react';
import '../../../src/assets/destination.css'


const PurchaseItem = ({ date, time, price, destination }) => {
  return (
    <div className="purchase-item">
      <p><strong>Datum:</strong> {date}</p>
      <p><strong>Tid:</strong> {time}</p>
      <p><strong>Pris:</strong> {price}</p>
      <p><strong>Destination:</strong> {destination}</p>
    </div>
  );
};


const PurchaseHistory = ({ purchases }) => {
  return (
    <div className="purchase-history">
      <h2>Köp Historik</h2>
      {purchases.map((purchase, index) => (
        <PurchaseItem
          key={index}
          date={purchase.date}
          time={purchase.time}
          price={purchase.price}
          destination={purchase.destination}
        />
      ))}
    </div>
  );
};


const mockPurchases = [
  { date: '2024-04-01', time: '10:00', price: '$200', destination: 'New York' },
  { date: '2024-03-25', time: '12:30', price: '$180', destination: 'Paris' },
  { date: '2024-03-20', time: '15:45', price: '$250', destination: 'Tokyo' },
  { date: '2024-03-15', time: '09:15', price: '$150', destination: 'London' },
  { date: '2024-03-10', time: '11:20', price: '$220', destination: 'Dubai' },
];


const App = () => {
  return (
    <div className="app">
      <PurchaseHistory purchases={mockPurchases} />
    </div>
  );
};

export default App;