import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima"
import Spinner from "./Spinner";


export default function AppClima() {

  const {resultado,cargando,error} = useClima() 
  // console.log(resultado)
  // console.log(cargando)
  // console.log(error)
  return (
    <>
       <main className="dos-columnas">
            <Formulario/>
            { 
              cargando ? <Spinner/> : 
              resultado?.name ? <Resultado/>: 
              error ? <p>No se encuentra la ciudad, vuelva a intentar con otra.</p> 
              : <p>El clima se va a mostrar aquí</p>
            } 
            
            
           
       </main>
    </>
  )
}
