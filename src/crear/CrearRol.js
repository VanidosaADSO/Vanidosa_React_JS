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
import toggleRed from '../assets/img/toggle-off-red.svg';

function CrearRol() {
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

                        <a className="content-link-menu d-flex align-items-center active " href="/crearRol">
                            <div className="content-icon-menu d-flex justify-content-center ">
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
                        <h2 className="main-title text-center">CREAR ROL</h2>
                        <form className="main-form" >
                            <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >
                                    <option value="/crearRol">Crear Rol</option>
                                    <option value="/listaRol">Listar Rol</option>
                                </select>
                            </div>

                            <div class="field-content d-flex">

                                <div class="content-label-input">
                                    <label for="">Nombre de rol</label>
                                    <input class="general-input form-control" type="text" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Fecha de creado</label>
                                    <input class="general-input form-control" type="date" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Estado</label>
                                    <select name="" id="" class="select-main form-select">
                                        <option value="1">Activo</option>
                                        <option value="2">Inactivo</option>
                                    </select>
                                </div>

                                <div class="content-permissions">
                                    <h6 class="text-center">PERMISOS</h6>
                                    <div class="permissions d-flex">

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Dashboard</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Roles</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Usuarios</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Insumos</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Proveedores</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Compras</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Servicios</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Clientes</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                        <div class="content-role-permissions d-flex justify-content-center">
                                            <div class="role-permissions d-flex justify-content-between align-items-center">
                                                <span class="text-rol">Citas</span>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </div>

                                      
                                    </div>



                                </div>
                            </div>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input className="clear-button" type="reset" value="Cancelar" />
                                    <input class="send-button" type="submit" id="btnRegistrar" value="Registrar" />
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
            </div>
            <script src="../assets/js/funcionesClientes.js"></script>
        </>
    );

}

export default CrearRol;