import { Outlet, Link, useLocation } from 'react-router-dom' //Permite que se pueda llamar desde otras paginas

const Layout = () => {

    const location = useLocation()
    console.log(location)
    const urlNow = location.pathname
    
    // const newUrl = 

  return (
    <div className="md:flex md:min-h-screen">
        {/* Construccion del front de trabajo , barra de 1/4 para el menu y bara 3/4 para el contenedor de lo que se va a mostrar */}
        <div className="md:w-1/4 bg-blue-900 px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
            
            <nav className="mt-10">
                {/* Cambia la sintaxis para poder llamar el hook useLocation */}
                <Link className={`${urlNow === '/clientes' ? 'text-blue-300' : 'text-white'} text-1xl block mt-2 hover:text-blue-300`} to="/clientes">Clientes</Link>
                <Link className={`${urlNow === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-1xl block mt-2 hover:text-blue-300`} to="/clientes/nuevo">Nuevo Cliente</Link>
            </nav>

        </div>
        {/* este es el espacio  de trabajo para clocar todo el contenido del front de gestion */}
        <div className="md:w-3/4 p-10 md:h-screen overflow-scroll"> {/*Crea el scroll de la parte de donde se va a hacer el manejo de la infoemacion md:h-screen overflow-scroll */}
            <Outlet />
        </div>        

        
      
    </div>
  );
}

export default Layout;
