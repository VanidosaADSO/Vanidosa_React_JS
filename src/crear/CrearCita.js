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


function CrearCita() {


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

                        <a className="content-link-menu d-flex align-items-center  " href="/crearRol">
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

                        <a className="content-link-menu d-flex align-items-center " href="/servicios">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={servicio} alt="" />
                            </div>
                            <span className="text-menu">Servicios</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center " href="/clientes">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={clientes} alt="" />
                            </div>
                            <span className="text-menu">Clientes</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center active" href="/citas">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={cita} alt="" />
                            </div>
                            <span className="text-menu">Citas</span>
                        </a>
                    </div>
                </aside>

                <div class="content-main d-flex justify-content-center">
                    <div class="content-title-form">
                        <h2 class="main-title text-center">AGENDAR CITA</h2>
                        <div id="respuesta"></div>

                        <form id="formulario" class="main-form" action="">

                        <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >        
                                    <option value="/citas">Crear Cita</option>
                                    <option value="/listaCita">Listar Citas</option>

                                </select>
                            </div>

                            <div class="field-content d-flex">

                                <div class="content-label-input">
                                    <label for="">Documento</label>
                                    <input class="general-input form-control" type="text" id="nombre" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Nombre</label>
                                    <input class="general-input form-control" type="text" id="nombre" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Apellidos</label>
                                    <input class="general-input form-control" type="text" id="apellido" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Tipo de servicio</label>
                                    <select name="" id="" class="select-main form-select" size="1" onchange="">
                                        <option selected>Tipo de servicio</option>
                                        <option value="2">Corte de cabello</option>
                                        <option value="3">Tratamientos capilares</option>
                                        <option value="4">Rasurado</option>
                                        <option value="4">Arreglo de barba, bigote y patilla</option>
                                        <option value="6">Tintura de cabello</option>
                                        <option value="7">Maquillaje facial</option>

                                    </select>

                                </div>

                                <div class="content-label-input">
                                    <label for="">Fecha</label>
                                    <input class="general-input form-control" type="date" id="fecha" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Hora</label>
                                    <input class="general-input form-control" type="time" id="hora" />
                                </div>

                                <div class="content-observations">
                                    <label for="">Descripción</label>
                                    <textarea class="observations form-control" name="" id="" cols="30" rows="10"></textarea>
                                </div>

                            </div>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input class="clear-button" type="reset" value="Limpiar" />
                                    <input id="registrar" class="send-button" type="submit" value="Agendar" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <script src="../assets/js/funcionesClientes.js"></script>
                <script src="../assets/js/ValidarCitas.js"></script>
            </div>
        </>
    );
}

export default CrearCita;