import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Servicio from './bodys/Servicio';
import AgendarCitas from './bodys/Agendar';
import Catalogo from './bodys/Catalogo';
import Contacto from './bodys/Contacto';
import Nosotros from './bodys/Nosotros';
import Main  from './Headers/Main';
import Home from './crear/home';
import CrearUsu from './crear/CrearUsuario';
import ListarUsu from './listar/ListarUsuario';
import ModificarUsu from './modificar/ModificarUsuario';
import CrearRol from './crear/CrearRol';
import ListaRol from './listar/ListarRol';
import ModificarRol from './modificar/ModificarRol';
import CrearInsumo from './crear/CrearInsumo';
import ListaInsumo from './listar/ListaInsumo';
import ModificarInsumo from './modificar/ModificarInsumo';
import CrearProveedor from './crear/CrearProveedor';
import ListarProveedor from './listar/ListarProveedor';
import ModificarProveedor from './modificar/ModificarProveedor';
import CrearCompra from './crear/CrearCompra';
import ListarCompra from './listar/ListarCompra';
import ModificarCompra from './modificar/ModificarCompra';
import CrearServicio from './crear/CrearServicio';
import ListarServicio from './listar/ListarServicio';
import ModificarServicio from './modificar/ModificarServicio';
import CrearCliente from './crear/CrearCliente';
import ListarCliente from './listar/ListarCliente';
import ModificarCliente from './modificar/ModificarCliente';
import CrearCita from './crear/CrearCita';
import ListarCita from './listar/ListarCita';
import ModificarCita from './modificar/ModificarCita';
import Login from './Headers/Login';
import Registrar from './Headers/Registar';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/servicio" element={<Servicio />} />
          <Route path="/agendarcitas" element={<AgendarCitas />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />

          <Route path='/login' element={<Login/>} />
          <Route path='/registro' element={<Registrar/>} />

          {/* Las rutas del panel administrativo */}
          <Route path="/home" element={<Home />} />
          
          {/* Estas son las rutas de los crear */}
          <Route path="/crearusuario" element={<CrearUsu />} />  
          <Route path="/crearRol" element={<CrearRol />} />  
          <Route path="/insumos" element={<CrearInsumo />} />  
          <Route path="/proveedores" element={<CrearProveedor />} />  
          <Route path="/compras" element={<CrearCompra />} />  
          <Route path="/servicios" element={<CrearServicio/>} />  
          <Route path="/clientes" element={<CrearCliente/>} />  
          <Route path="/citas" element={<CrearCita/>} />  

          {/* Estan son las rutas de los listar */}
          <Route path="/listarUsuario" element={<ListarUsu />} />  
          <Route path="/listaRol" element={<ListaRol />} />  
          <Route path="/listarInsumos" element={<ListaInsumo />} />  
          <Route path="/listarProveedor" element={<ListarProveedor />} />  
          <Route path="/listarCompra" element={<ListarCompra />} />  
          <Route path="/listarServicio" element={<ListarServicio />} />  
          <Route path="/listaClientes" element={<ListarCliente />} />  
          <Route path="/listaCita" element={<ListarCita />} />  

          {/* Estas son las rutas de los modificar */}
           <Route path="/modificarUsuario" element={<ModificarUsu />} />  
           <Route path="/modificarRol" element={<ModificarRol />} />  
           <Route path="/modificarinsumo" element={<ModificarInsumo />} />  
           <Route path="/modificarProveedores" element={<ModificarProveedor />} />  
           <Route path="/modificarCompras" element={<ModificarCompra />} />  
           <Route path="/modificarServicio" element={<ModificarServicio />} />  
           <Route path="/modificarCliente" element={<ModificarCliente />} />  
           <Route path="/modificarCita" element={<ModificarCita />} />  
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;



