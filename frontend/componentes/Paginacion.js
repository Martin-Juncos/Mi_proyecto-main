// src/components/Paginacion.js
import React from 'react';

export default function Paginacion({
    productosPorPagina,
    paginaActual,
    setPaginaActual,
    totalProductos,
}) {
    const pageNumber = [];

    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        pageNumber.push(i);
    }
    
    const paginaAnterior = () => {
        if (paginaActual > 1) { 
            setPaginaActual(paginaActual - 1);
        }
    };

    const paginaSiguiente = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
        }
    };

    const paginaEspecifica = (num) => setPaginaActual(num);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {}
            <button 
                onClick={paginaAnterior} 
                disabled={paginaActual === 1}
                style={{ cursor: paginaActual === 1 ? 'not-allowed' : 'pointer' }}
            >
                Anterior
            </button>

            {}
            {pageNumber.map((number) => (
                <button
                    key={number}
                    onClick={() => paginaEspecifica(number)}
               
                    style={{ 
                        backgroundColor: number === paginaActual ? '#007bff' : 'white',
                        color: number === paginaActual ? 'white' : 'black',
                        border: '1px solid #ccc',
                        cursor: 'pointer'
                    }}
                >
                    {number}
                </button>
            ))}

            {}
            <button 
                onClick={paginaSiguiente} 
                disabled={paginaActual === totalPaginas}
                style={{ cursor: paginaActual === totalPaginas ? 'not-allowed' : 'pointer' }}
            >
                Siguiente
            </button>
        </div>
    );
}