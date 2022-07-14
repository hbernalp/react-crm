import React from 'react';
import { Formik, Form, Field } from 'formik'

const Formulario = () => {
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
        
        >

            {() => (
            
                <Form className="mt-10">
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="nombre">Nombre:</label>
                        <Field id="nombre" name="nombre" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre del Cliente" />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="empresa">Nombre de la Empresa:</label>
                        <Field id="empresa" name="empresa" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre de la Empresa" />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="email">Email del Cliente:</label>
                        <Field id="email" name="email" type="email" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Email del Cliente" />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="telefono">Telefono del Cliente:</label>
                        <Field id="telefono" name="telefono" type="telefono" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Telefono del Cliente" />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="notas">Notas del Cliente:</label>
                        <Field as="textarea" name="notas" id="notas" type="text" className="mt-2 block w-full p-3 bg-gray-50 h-40" placeholder="Notas del Cliente" />
                    </div>

                    <input type="submit" value="Agregar Cliente" className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg" />

                </Form>
                
            )}

        </Formik>

    </div>
  )
}

export default Formulario;
