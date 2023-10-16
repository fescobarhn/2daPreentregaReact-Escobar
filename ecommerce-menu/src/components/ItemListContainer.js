// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { id } = useParams();  // este es el ID de la categoría
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Aquí llamarías a tu función async para obtener la lista de productos según la categoría
    // Por ejemplo:
    fetchItemsByCategory(id).then(data => {
      setItems(data);
    });
  }, [id]);

  return (
    <div>
      {/* Renderizar tu lista de ítems aquí */}
    </div>
  );
}

export default ItemListContainer;

