
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import formatDate from '../utils/formatDate'


import IconoReserva from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'

const diccionarioIconos = {
    reserva: IconoReserva,
    comida: IconoCasa,
    casa: IconoComida,
    varios: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
}
const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
    const { nombre, categoria, cantidad, id, fecha } = gasto;
    const leadingActions = () => (<LeadingActions><SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction></LeadingActions >)
    const trailingActions = () => (<TrailingActions><SwipeAction onClick={() => eliminarGasto(gasto.id)} destructive={true}>Eliminar</SwipeAction></TrailingActions >)
    return (
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img src={diccionarioIconos[categoria]} alt="" />
                        <div className="descripcion-gasto">
                            <p className="categoria">{categoria}</p>
                            <p className="nombre-gasto">{nombre}</p>
                            <p className="fecha-gasto">Agregando el: {''} <span>{formatDate(fecha)}</span></p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
