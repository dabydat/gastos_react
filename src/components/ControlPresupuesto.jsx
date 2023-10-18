import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        const calculatePercent = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentaje(calculatePercent);
        }, 1000);
    }, [gastos]);

    const formatPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('Deseas reiniciar presupuesto y gastos?')
        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({ pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6', trailColor: '#F5F5F5', textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6', })}
                    value={porcentaje}
                    text={`${porcentaje}%`}
                />
                <p>Grafica</p>
            </div>
            <div className='contenido-presupuesto'>
                <button className='reset-app' type='button' onClick={handleResetApp}>
                    Resetar APP
                </button>
                <p>
                    <span>Presupuesto:</span> {formatPresupuesto(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
