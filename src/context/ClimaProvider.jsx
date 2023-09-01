import { createContext,useState } from "react"
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(false)

  const [busqueda, setBusqueda] = useState({
    ciudad:"",
    pais:""
  })

  const datosBusqueda = (e)=>{

    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })

  }

  const consultarClima = async datos =>{
    setCargando(true)
    setError(false)
    try {
      const {ciudad,pais} = datos;
      const appId = import.meta.env.VITE_API_KEY;


      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
      const {data} = await axios(url)
      const {lat,lon} = data[0]; //data[0] porque lo trae como un array

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      console.log(urlClima)
      const {data:clima} = await axios(urlClima)
      // console.log(clima)
      setResultado(clima)

    } catch (error) {
      setError (true)
      setResultado({})
    }finally{
      setCargando(false)
    }
  }

  return (
    <ClimaContext.Provider
        value={{
            busqueda,
            datosBusqueda,
            consultarClima,
            resultado,
            cargando,
            error,
            setError
        }}
    >
        {children}
    </ClimaContext.Provider>
  )
}

export {
    ClimaProvider
} 

export default ClimaContext;
