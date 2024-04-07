// ProductEditForm.jsx
import React, { useState } from 'react';

function ProductEditForm({ product, onSave, onCancelEdit }) {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(editedProduct);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedProduct.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={editedProduct.price}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancelEdit}>Cancel</button>
    </div>
  );
}

export default ProductEditForm;