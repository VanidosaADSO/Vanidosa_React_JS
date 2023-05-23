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


function CrearInsumo() {
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

                        <a className="content-link-menu d-flex align-items-center active" href="/insumos">
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
                        <h2 class="main-title text-center">CREAR INSUMO</h2>

                        <form class="main-form" action="">
                        <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >
                                    <option value="/insumos">Crear Insumo</option>
                                    <option value="/listarInsumos">Listar Insumos</option>
                                </select>

                                {/* <div className="content-search">
                                    <input className="search form-control" type="text" placeholder="Buscar..." />
                                    <img className="search-icon" src="../assets/img/search.svg" alt="" />
                                </div> */}
                            </div>

                    <div class="field-content d-flex">

                        <div class="content-label-input">
                            <label for="">Nombre</label>
                            <input class="general-input form-control" type="text" id="Nombre" />
                        </div>

                        <div class="content-label-input">
                            <label for="">Cantidad</label>
                            <input class="general-input form-control" type="number" id="Cantidad" />
                        </div>

                        <div class="content-label-input">
                            <label for="">Unidad de Medida</label>
                            <select name="" id="Ud_medida" class="general-input form-select">
                                <option selected>Seleccione...</option>
                                <option value="1">Litros</option>
                                <option value="2">Mililitros</option>
                                <option value="3">Galon</option>
                                <option value="4">Onzas</option>
                                <option value="5">Unidades</option>
                                <option value="6">Cajas</option>
                                <option value="7">Pares</option>
                            </select>
                        </div>
                    </div>

                    <div class="content-button d-flex justify-content-center">
                        <div class="content-send-clear">
                            <input class="clear-button" type="reset" value="Limpiar" />
                            <input class="send-button" type="submit" value="Registrar" id="btnRegistrar" />
                        </div>
                    </div>

                </form>
                    </div>
                </div>
            </div>
        </>
    );

}


export default CrearInsumo;