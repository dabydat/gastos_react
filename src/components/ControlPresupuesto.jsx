import { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        setGastado(totalGastado);
        setDisponible(totalDisponible);
    }, [gastos]);

    const formatPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar />
                <p>Grafica</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {formatPresupuesto(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formatPresupuesto(disponible)}
                </p>
                <p>
                    <span>Usado:</span> {formatPresupuesto(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
