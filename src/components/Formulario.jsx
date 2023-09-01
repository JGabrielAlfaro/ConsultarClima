import { useState } from "react";
import useClima from "../hooks/useClima"

const Formulario = () => {

  const {busqueda,datosBusqueda,consultarClima,setError} = useClima();
  
  const {ciudad,pais} = busqueda;
  const [alerta,setAlerta] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")){
      setAlerta("Todos los campos son obligatorios")
      setError(false)
      return;
    }
    setAlerta("")
    
    consultarClima(busqueda)
  }

  return (
    <div className="contenedor">

      {alerta && <p>{alerta}</p>}

      <form onSubmit={handleSubmit}>

        <div className="campo">
            <label htmlFor="ciudad">Ciudad</label>
            <input
                type="text"
                id="ciudad"
                name="ciudad"
                onChange={datosBusqueda}
                value={ciudad}
            />
        </div>

        <div className="campo">
            <label htmlFor="pais">País</label>
           <select
                id="pais"
                name="pais"
                onChange={datosBusqueda}
                value={pais}
            >
                <option value="">--Seleccione un país--</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">Mexico</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
            </select>
        </div>

        <input
            type="submit"
            value="Consultar el clima"
        />
      </form>
    </div>
  )
}

export default Formulario
