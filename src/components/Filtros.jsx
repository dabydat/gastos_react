import { useState, useEffect } from 'react'

const Filtros = () => {
    return (
        <div className='fitros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="categoria" value={categoria}>
                        <option value="">-- Seleccione --</option>
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
