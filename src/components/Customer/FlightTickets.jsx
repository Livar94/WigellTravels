// FlightTickets.js
import React, { useState } from 'react';
import '../../assets/FlightTickets.css';

export default function FlightTickets() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      destination: 'New York',
      date: '2024-04-15',
      time: '08:00',
      price: 500
    },
    {
      id: 2,
      destination: 'London',
      date: '2024-05-20',
      time: '10:30',
      price: 700
    },
    {
      id: 3,
      destination: 'Tokyo',
      date: '2024-06-10',
      time: '14:45',
      price: 1000
    }
  ]);

  const handleDelete = (id) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(updatedTickets);
  };

  return (
    <div className="flight-tickets">
      <h2>Flight Tickets</h2>
      <ul className="ticket-list">
        {tickets.map(ticket => (
          <li key={ticket.id} className="ticket-item">
            <div>Destination: {ticket.destination}</div>
            <div>Date: {ticket.date}</div>
            <div>Time: {ticket.time}</div>
            <div>Price: {ticket.price} USD</div>
            <button className="remove-button" onClick={() => handleDelete(ticket.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
