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


function ModificarUsu() {
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
                <div class="content-main d-flex justify-content-center">
                    <div class="content-title-form">
                        <h2 class="main-title text-center">MODIFICAR USUARIO</h2>

                        <form class="main-form" action="">

                            <div class="content-select-search d-flex justify-content-between">
                                <select name="" id="" class="select-main form-select" size="1"
                                    onchange="window.location.href=this.value;">
                                    <option value="/modificarUsuario">modificar usuario</option>
                                    <option value="/listarUsuarios">Listar Usuarios</option>
                                    <option value="/crearusuario">Crear Usuario</option>
                                </select>
                            </div>

                            <div class="field-content d-flex">

                                <div class="content-label-input">
                                    <label for="">Rol</label>
                                    <select name="" id="rol" class="general-input form-select">
                                        <option selected>Seleccione...</option>
                                        <option value="1">Administrador</option>
                                        <option value="2">Empleado</option>
                                        <option value="3">Cliente</option>
                                    </select>
                                </div>

                                <div class="content-label-input">
                                    <label for="">Nombre</label>
                                    <input class="general-input form-control" type="text" id="nombre" readonly />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Apellidos</label>
                                    <input class="general-input form-control" type="text" id="apellido" readonly />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Tipo de documento</label>
                                    <select name="" id="Tipodocumento" class="general-input form-select" >
                                        <option selected>Seleccione...</option>
                                        <option value="CC">Cedula ciudadanía</option>
                                        <option value="Ti">Cedula de extranjería</option>
                                        <option value="CE">Targeta de identidad</option>
                                    </select>
                                </div>

                                <div class="content-label-input">
                                    <label for="">Documento</label>
                                    <input class="general-input form-control" type="number" id="documento" readonly />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Dirección</label>
                                    <input class="general-input form-control" type="text" id="direccion" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Teléfono</label>
                                    <input class="general-input form-control" type="number" id="telefono" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Correo</label>
                                    <input class="general-input form-control" type="email" id="correo" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Contraseña actual</label>
                                    <input class="general-input form-control" type="text" id="contrasenaActual" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Nueva contraseña</label>
                                    <input class="general-input form-control" type="text" id="nuevaContrasena" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Confirmar contraseña</label>
                                    <input class="general-input form-control" type="text" id="confirmarContrasena" />
                                </div>

                            </div>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input class="clear-button" type="reset" value="Limpiar" />
                                    <input class="send-button" type="submit" id="btnRegistrar" value="Guardar" />
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

export default ModificarUsu;
