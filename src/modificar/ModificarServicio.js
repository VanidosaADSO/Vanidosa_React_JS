import React, { useState } from "react";
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


function ModificarServicio() {

    const [Precio, setPrecio] = useState(10000);

    const handleChange = (event) => {
      setPrecio(event.target.value);
    };
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

                        <a className="content-link-menu d-flex align-items-center active" href="/servicios">
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
                        <h2 class="main-title text-center"> MODIFICAR SERVICIO </h2>

                        <div id="respuesta"></div>
                        <form id="formulario" class="main-form" action="" oninput="resultado.value=rango.value">

                        <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >

                                    
                                    <option value="/modificarServicio">Modificar Servicio</option>
                                    <option value="/servicios">Crear Servicio</option>
                                    <option value="/listarServicio">Listar Servicio</option>

                                </select>
                            </div>

                            <div class="field-content d-flex">

                                <div class="content-label-input">
                                    <label for="">Nombre del servicio</label>
                                    <input class="general-input form-control" type="text" id="nombre" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Tiempo del Servicio</label>
                                    <input class="general-input form-control" type="text" id="tiempo" placeholder="En minutos" />
                                </div>

                                <div class="content-label-input">
                                    <label for="">Hora del Servicio</label>
                                    <input class="general-input form-control" type="time" id="hora" />
                                </div>

                                <div className="content-label-input">
                                    <label htmlFor="">Precio</label>
                                    <label htmlFor="rango">1.000</label>
                                    <input
                                        type="range"
                                        id="rango"
                                        name="rango"
                                        value={Precio}
                                        min={1000}
                                        max={1500000}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="rango">1'500.000</label>

                                    <p>El precio seleccionado es: {Precio}</p>
                                </div>

                                <div class="content-observations">
                                    <label for="">Descripción</label>
                                    <textarea class="observations form-control" name="" id="" cols="30" rows="10"></textarea>
                                </div>

                            </div>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input class="clear-button" type="reset" value="Limpiar" />
                                    <input id="registrar" class="send-button" type="submit" value="Registrar" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
            <script src="../assets/js/funcionesClientes.js"></script>
            <script src="../assets/js/ValidarServicios.js"></script>
        </>
    );
}


export default ModificarServicio;
