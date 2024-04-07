import React, { useState } from 'react';
import '../../assets/UpdateTicketsList.css';

const TicketTable = ({ tickets, onUpdate }) => {
    const [editingId, setEditingId] = useState(null);

    const handleInputChange = (e, ticket) => {
        const { name, value } = e.target;
        onUpdate({ ...ticket, [name]: value });
    };

    const handleUpdate = (ticket) => {
        setEditingId(null);
        onUpdate(ticket);
    };

    return (
        <table>
            <thead>
            <tr>
                <th>Namn</th>
                <th>Beskrivning</th>
                <th>Pris</th>
                <th>Åtgärder</th>
            </tr>
            </thead>
            <tbody>
            {tickets.map((ticket, index) => (
                <tr key={index}>
                    <td>{editingId === ticket.id ? (
                        <input
                            type="text"
                            name="name"
                            value={`ticket ${ticket.name}`}
                            onChange={(e) => handleInputChange(e, ticket)}
                        />
                    ) : ticket.name}</td>
                    <td>{editingId === ticket.id ? (
                        <input
                            type="text"
                            name="description"
                            value={ticket.destination}
                            onChange={(e) => handleInputChange(e, ticket)}
                        />
                    ) : ticket.destination}</td>
                    <td>{editingId === ticket.id ? (
                        <input
                            type="text"
                            name="price"
                            value={ticket.price}
                            onChange={(e) => handleInputChange(e, ticket)}
                        />
                    ) : `SEK ${ticket.price}`}</td>
                    <td>
                        {editingId === ticket.id ? (
                            <button className="save-btn" onClick={() => handleUpdate(ticket)}>Spara</button>
                        ) : (
                            <button className="edit-btn" onClick={() => setEditingId(ticket.id)}>Uppdatera</button>
                        )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

const UpdateTicketsList = ({tickets, setTickets}) => {
    

    const handleUpdate = (updatedTicket) => {
        setTickets(tickets.map(ticket => (
            ticket.id === updatedTicket.id ? updatedTicket : ticket
        )));
    };

    return (
        <div className="container">
            <h2>Uppdatera Biljetter</h2>
            <TicketTable tickets={tickets} onUpdate={handleUpdate} />
        </div>
    );
};

export default UpdateTicketsList;