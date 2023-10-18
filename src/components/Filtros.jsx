import { useState, useEffect } from 'react'

const Filtros = ({ filtro, setFiltro }) => {
    return (
        <div className='fitros sombra contenedor'>
            <form className=''>
                <div className='campo'>
                    <label>Filtrar Gastos</label>
                    <select value={filtro} onChange={e => setFiltro(e.target.value)}>
                        <option value="">-- Todas las categorias --</option>
                        <option value="reserva">Reserva</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
