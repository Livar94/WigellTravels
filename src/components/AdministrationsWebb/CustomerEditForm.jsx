
import React, { useState } from 'react';

function CustomerEditForm({ customer, onSave, onCancelEdit }) {
  const [editedCustomer, setEditedCustomer] = useState({ ...customer });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer({ ...editedCustomer, [name]: value });
  };

  const handleSave = () => {
    onSave(editedCustomer);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedCustomer.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={editedCustomer.email}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancelEdit}>Cancel</button>
    </div>
  );
}

export default CustomerEditForm;
