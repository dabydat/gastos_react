import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Modal from "./components/Modal";
import generateId from "./utils/generateId"
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import ListadoGasto from './components/ListadoGasto';

function App() {
  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto', presupuesto)) ?? 0
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);
  
  useEffect(() => {
    const gastosLS = JSON.parse(localStorage.getItem('gastos', gastos)) ?? []
    if (gastosLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);



  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true)
      }, 200);
    }
  }, [gastoEditar]);


  const handleNuevoGasto = () => {
    setModal(true); setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true)
    }, 200);
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      setGastos([...gastos, { ...gasto, id: generateId(), fecha: Date.now() }]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header gastos={gastos} presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
      {isValidPresupuesto &&
        (<>
          <main><ListadoGasto gastos={gastos} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto} /></main>
          <div className='nuevo-gasto'><img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto} /></div>
        </>)
      }
      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto} gastoEditar={gastoEditar} setGastoEditar={setGastoEditar} />}
    </div>
  )
}

export default App
