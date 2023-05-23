import React from "react";
import Header from "../Headers/Header";
import inicio from '../assets/img/inicio.svg';
import usuarios from '../assets/img/usuarios.svg';
import insumos from '../assets/img/insumos.svg';
import proveedores from '../assets/img/proveedores.svg';
import compras from '../assets/img/compras.svg';
import servicio from '../assets/img/servicios.svg';
import clientes from '../assets/img/clientes.svg';
import cita from '../assets/img/citas.svg';
import roles from '../assets/img/roles.svg';


function CrearUsu() {
    return (
        <>
            <Header />
            <div class="content-dash d-flex">

                <aside className="menu">
                    <div className="content-menu">
                        <a className="content-link-menu d-flex align-items-center " href="/home">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={inicio} alt="" />
                            </div>
                            <span className="text-menu">Inicio</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center " href="/crearRol">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={roles} alt="" />
                            </div>
                            <span className="text-menu">Roles</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center active" href="/crearusuario">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={usuarios} alt="" />
                            </div>
                            <span className="text-menu">Usuarios</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center" href="/insumos">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={insumos} alt="" />
                            </div>
                            <span className="text-menu">Insumos</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center" href="/proveedores">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={proveedores} alt="" />
                            </div>
                            <span className="text-menu">Proveedores</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center" href="/compras">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={compras} alt="" />
                            </div>
                            <span className="text-menu">Compras</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center" href="/servicios">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={servicio} alt="" />
                            </div>
                            <span className="text-menu">Servicios</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center" href="/clientes">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={clientes} alt="" />
                            </div>
                            <span className="text-menu">Clientes</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center" href="/citas">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={cita} alt="" />
                            </div>
                            <span className="text-menu">Citas</span>
                        </a>
                    </div>
                </aside>

                <div className="content-main d-flex justify-content-center">
                    <div className="content-title-form">
                        <h2 className="main-title text-center">CREAR USUARIO</h2>
                        <form className="main-form" >
                            <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >
                                    <option value="/crearusuario">Crear Usuario</option>
                                    <option value="/listarUsuario">Listar Usuarios</option>
                                </select>

                                {/* <div className="content-search">
                                    <input className="search form-control" type="text" placeholder="Buscar..." />
                                    <img className="search-icon" src="../assets/img/search.svg" alt="" />
                                </div> */}
                            </div>

                            <div className="field-content d-flex">
                                <div className="content-label-input">
                                    <label htmlFor="rol">Rol</label>
                                    <select id="rol" className="general-input form-select">
                                        <option defaultValue>Seleccione...</option>
                                        <option value="1">Administrador</option>
                                        <option value="2">Empleado</option>
                                        <option value="3">Cliente</option>
                                    </select>
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input className="general-input form-control" type="text" id="nombre" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="apellido">Apellidos</label>
                                    <input className="general-input form-control" type="text" id="apellido" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="tipoDocumento">Tipo de documento</label>
                                    <select id="tipoDocumento" className="general-input form-select">
                                        <option defaultValue>Seleccione...</option>
                                        <option value="CC">Cédula de ciudadanía</option>
                                        <option value="Ti">Cédula de extranjería</option>
                                        <option value="CE">Tarjeta de identidad</option>
                                    </select>
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="documento">Documento</label>
                                    <input className="general-input form-control" type="number" id="documento" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="direccion">Dirección</label>
                                    <input className="general-input form-control" type="text" id="direccion" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input className="general-input form-control" type="number" id="telefono" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="correo">Correo</label>
                                    <input className="general-input form-control" type="email" id="correo" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="contrasena">Contraseña</label>
                                    <input className="general-input form-control" type="password" id="contrasena" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="confirmarContrasena">Confirmar contraseña</label>
                                    <input className="general-input form-control" type="password" id="confirmarContrasena" />
                                </div>
                            </div>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input className="clear-button" type="reset" value="Limpiar" />
                                    <input class="send-button" type="submit" id="btnRegistrar" value="Registrar" />
                                </div>
                            </div>


                        </form>

                    </div>
                </div>


            </div>
            
<script src="../assets/js/funcionesClientes.js"></script>
<script src="../assets/js/ValidarUsuarios.js"></script>
        </>
    );

}

export default CrearUsu;