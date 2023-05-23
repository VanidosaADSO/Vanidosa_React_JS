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


function ModificarProveedor() {
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

                        <a className="content-link-menu d-flex align-items-center " href="/crearusuario">
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

                        <a className="content-link-menu d-flex align-items-center active" href="/proveedores">
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
                        <h2 class="main-title text-center">MODIFICAR PROVEEDOR</h2>

                        <form class="main-form" action="">

                            <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >
                                    <option value="/modificarProveedores">Modificar Proveedor</option>
                                    <option value="/proveedores">Crear Proveedor</option>
                                    <option value="/listarProveedor">Listar Proveedor</option>
                                </select>
                            </div>

                            <div class="field-content d-flex">

                                <div class="content-label-input">
                                    <label for="">Nombre Proveedor</label>
                                    <input class="general-input form-control" type="text" id="nombre" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Apellido Proveedor</label>
                                    <input class="general-input form-control" type="text" id="apellido" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Correo Proveedor</label>
                                    <input class="general-input form-control" type="text" id="correo" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Dirección Proveedor</label>
                                    <input class="general-input form-control" type="text" id="direccion" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Teléfono Proveedor</label>
                                    <input class="general-input form-control" type="number" id="telefono" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Nit Proveedor</label>
                                    <input class="general-input form-control" type="number" id="nit" />
                                </div>

                            </div>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input class="clear-button" type="reset" value="Limpiar" />
                                    <input id="btnRegistrar" type="submit" class="send-button" value="Guardar" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <script src="../assets/js/funcionesClientes.js"></script>
                <script src="../assets/js/ValidarProveedor.js"></script>
            </div>
        </>
    );
}

export default ModificarProveedor;