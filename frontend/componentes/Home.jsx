import { useState, useEffect } from "react";
import Card from './Card.jsx';

// generar datos de forma aleatoria
const generateProducts = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Suscripciones ${i + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));
};

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = generateProducts(50);

    setProducts(allProducts);

    console.log("Productos cargados:", allProducts);
  }, []);

  console.log("Estado actual de products:", products);

return (
    <div className="container"> 
      <h1 className="my-4">Catálogo de Productos ({products.length})</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card productData={product} /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
