import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VerCliente = () => {

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
    Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (
        <div>
            {cargando ? 'cargando....' : (
                <>
                    <h1 className="font-black text-4xl text-blue-900">Cliente </h1>
                    <p className="mt-3 border-b">Ver la información completa del cliente</p> 

                    {/* {cliente.id && (
                        <p className="text-2xl text-gray-600 mt-10">
                            <span className="text-grey-800 uppercase font-bold">Id: </span>
                            {cliente.id}
                        </p>
                    )} */}

                    {cliente.nombre && (
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="text-grey-800 uppercase font-bold">Nombre del Cliente: </span>
                            {cliente.nombre}
                        </p>
                    )}

                    {cliente.empresa && (
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="text-grey-800 uppercase font-bold">Empresa o Razon Social: </span>
                            {cliente.empresa}
                        </p>
                    )}

                    {cliente.email && (
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="text-grey-800 uppercase font-bold">Email: </span>
                            {cliente.email}
                        </p>
                    )}

                    {cliente.telefono && (
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="text-grey-800 uppercase font-bold">Telefono de Contacto: </span>
                            {cliente.telefono}
                        </p>
                    )}

                    {cliente.notas && (
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="text-grey-800 uppercase font-bold">Notas del Cliente: </span>
                            {cliente.notas}
                        </p>
                    )}
                </> 

            )}       
        </div>
    )
  )
}

export default VerCliente