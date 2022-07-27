import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import Alerta from './Alerta'


const Formulario = ({cliente}) => {

    //Preparando la redireccion despues de la carga del formulario
    const navigate = useNavigate()

    // el shape es la forma que van a tener los datos del lado del cliente
    const nuevoClienteSchema = yup.object().shape({  
        nombre: yup.string().required('El nombre del Cliente es necesario'),
        empresa: yup.string().required('El nombre de la Empresa es necesario'),
        email: yup.string().email('El email debe contener un @').required('El Email es necesario'),
        telefono: yup.number().required('El Numero de telefono es requerido').min(7,'El numeo debe ser minimo de 7 digitos').positive('Los numeros deben ser positivos').integer('Los numeros deben ser enteros').typeError('No debe incluir letras')
        
    })
        // Enviando datos a db.json Methodo post para crear un registro
    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/clientes'

            //utilizando fetch
            const respuesta = await fetch(url, {
                method:'POST',
                body: JSON.stringify(valores),
                headers: { 
                    'Content-Type': 'application/json' //informa que el tipo de contenido a enviar es JSON
                }
            })
            
            console.log(respuesta)
            const resultado = await respuesta.json()
            console.log(resultado)
            
            //Activando la redireccion a la ruta deseada
            navigate('/clientes')
            
        } catch (error) {
            console.log(error)
            
        }
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-4/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>
        {/* Dentro de este componente se coloca el formulario y los campos  */}
        <Formik
        // Utilizando el state
        initialValues={ {
            nombre:'',
            empresa:'',
            email:'',
            telefono:'',
            notas:''

            }
        }

        onSubmit={ async (values, {resetForm}) => { //Sicroniza el envio de los valores del formulario
            await handleSubmit(values)  //Espera que ya se hallan enviado los datos

            resetForm()  //Cuando ya envia los datos resetea el formulario
        }}
        validationSchema={nuevoClienteSchema}
        >
            
            {({errors,touched}) => {
                return (
            
                <Form className="mt-10">
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="nombre">Nombre:</label>
                        <Field id="nombre" name="nombre" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre del Cliente" />
                        {errors.nombre && touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>                           
                        ): null}
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="empresa">Nombre de la Empresa:</label>
                        <Field id="empresa" name="empresa" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre de la Empresa" />
                        {errors.empresa && touched.empresa ? (
                            <Alerta>{errors.empresa}</Alerta>                           
                        ): null}
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="email">Email del Cliente:</label>
                        <Field id="email" name="email" type="email" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Email del Cliente" />
                        {errors.email && touched.email ? (
                            <Alerta>{errors.email}</Alerta>                           
                        ): null}
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="telefono">Telefono del Cliente:</label>
                        <Field id="telefono" name="telefono" type="telefono" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Telefono del Cliente" />
                        {errors.telefono && touched.telefono ? (
                            <Alerta>{errors.telefono}</Alerta>                           
                        ): null}
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="notas">Notas del Cliente:</label>
                        <Field as="textarea" name="notas" id="notas" type="text" className="mt-2 block w-full p-3 bg-gray-50 h-40" placeholder="Notas del Cliente" />
                    </div>

                    <input type="submit" value="Agregar Cliente" className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />

                </Form>
                
            )}}

        </Formik>

    </div>
  )
}

export default Formulario;
