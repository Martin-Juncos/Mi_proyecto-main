import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";

function Suscripciones() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchSuscripciones = async () => {
      try {
        setLoading(true);
        setError(null);
        
const response = await fetch("http://localhost:3001/api/suscripciones");
        
        if (!response.ok) {
          throw new Error(`Error en la red: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        setProducts(data); 

      } catch (err) {
        console.error("Error al obtener las suscripciones:", err);
        setError("Error al cargar las suscripciones. ¿El Backend está activo y la ruta existe?");
      } finally {
        setLoading(false);
      }
    };

    fetchSuscripciones();
  }, []); 

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2>Cargando Suscripciones...</h2>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="container my-5 alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="my-4">Planes de Suscripción ({products.length})</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}> 
            {}
            <Card productData={product} /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suscripciones;