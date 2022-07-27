import Formulario from '../components/formulario';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditarCliente = () => {
  
  const [cliente, setCliente] = useState({})
  // como quitar el intermitente de la carga de la informacion
  const [cargando, setCargando] = useState(false)

  const {id} = useParams() //El params lo puedes remplazar directamente por el Id

    useEffect(() => {
        setCargando(!cargando) //Esto revisa en que estado esta el state y si esta falso lo pone true y vice
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)

                
            } catch (error) {
                console.log(error)
            }
            setCargando(false)

        }
        obtenerClienteAPI()

    },[]) 


  return (
    <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente </h1>
            <p className="mt-3">Diligencie los campos a Editar</p> 
            <Formulario 
            cliente={cliente}
            />
        
        </>
  );
}

export default EditarCliente;
