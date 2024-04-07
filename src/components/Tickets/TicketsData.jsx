import React, { useState } from 'react';
import '../../assets/TicketsData.css';

const PurchaseItem = ({ id, date, time, price, destination, handleConfirmPayment, handleDelete }) => {
    const formatPriceToSEK = (price) => {
        const usdToSekConversionRate = 8.60;
        const priceSEK = (parseFloat(price.replace('$', '')) * usdToSekConversionRate).toFixed(2);
        return priceSEK + ' SEK';
    };

    return (
        <tr className="purchase-item">
            <td>{id}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{formatPriceToSEK(price)}</td>
            <td>{destination}</td>
            <td><button className="payment-btn" onClick={() => handleConfirmPayment(id)}>Confirm Payment</button></td>
            <td><button className="delete-btn" onClick={() => handleDelete(id)}>Delete</button></td>
        </tr>
    );
};

const PurchaseHistory = ({ purchases, handleConfirmPayment, handleDelete }) => {
    return (
        <div className="purchase-history">
            <h2>Tickets</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Datum</th>
                    <th>Tid</th>
                    <th>Pris</th>
                    <th>Destination</th>
                    <th>Bekräfta betalning</th>
                    <th>Radera</th>
                </tr>
                </thead>
                <tbody>
                {purchases.map((purchase) => (
                    <PurchaseItem
                        key={purchase.id}
                        id={purchase.id}
                        date={purchase.date}
                        time={purchase.time}
                        price={purchase.price}
                        destination={purchase.destination}
                        handleConfirmPayment={handleConfirmPayment}
                        handleDelete={handleDelete}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

const TicketsData = () => {
    const [mockPurchases, setMockPurchases] = useState([
        { id: 1, date: '2024-07-03', time: '09:00', price: '$300', destination: 'Lagos' },
        { id: 2, date: '2024-05-11', time: '11:30', price: '$780', destination: 'Stockholm' },
        { id: 3, date: '2024-07-25', time: '15:15', price: '$850', destination: 'Accra' },
        { id: 4, date: '2024-09-17', time: '10:29', price: '$850', destination: 'London' },
        { id: 5, date: '2024-07-25', time: '01:20', price: '$820', destination: 'Paris' },
    ]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [purchaseComplete, setPurchaseComplete] = useState(false);

    const handleConfirmPayment = (id) => {
        const purchase = mockPurchases.find(item => item.id === id);
        setShoppingCart(prevState => [...prevState, purchase]);
    };

    const handleDelete = (id) => {
        setMockPurchases(prevPurchases => prevPurchases.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        setShoppingCart([]);
        setPurchaseComplete(true);
    };

    return (
        <div className="app">
            <PurchaseHistory
                purchases={mockPurchases}
                handleConfirmPayment={handleConfirmPayment}
                handleDelete={handleDelete}
            />
            <div className="shopping-cart">
                <h2>Shopping Cart</h2>
                <ul>
                    {shoppingCart.map(item => (
                        <li key={item.id}>{item.destination} - {item.price}</li>
                    ))}
                </ul>
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                {purchaseComplete && <p>Köpet är godkänt!</p>}
            </div>
        </div>
    );
};

export default TicketsData;