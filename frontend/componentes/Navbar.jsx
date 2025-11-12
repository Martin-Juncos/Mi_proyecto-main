import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. Importar el componente Link

function Navbar() {
  return (
    // Reemplaza bg-body-tertiary por el color bordó (bg-danger)
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark"> 
      <div className="container-fluid">
        {/* Usar Link para navegar al home */}
        <Link className="navbar-brand text-white" to="/">Tecnología Diaria</Link> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* 2. Usar Link para Home */}
              <Link className="nav-link active" to="/">Home</Link> 
            </li>
            <li className="nav-item">
              {/* 3. Usar Link para Suscripciones */}
              <Link className="nav-link" to="/suscripciones">Suscripciones</Link>
            </li>
            {/* Si tienes otras páginas HTML estáticas (ej: sobre-mi.html), mantén el <a> */}
             <li className="nav-item">
              <a className="nav-link" href="/sobre-mi.html">Sobre mí</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/inscribirme.html">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;