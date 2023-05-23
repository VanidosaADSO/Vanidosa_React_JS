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
import search from '../assets/img/search.svg';
import edit from '../assets/img/edit.svg';
import toggleRed from '../assets/img/toggle-off-red.svg';
import toggleGreen from '../assets/img/toggle-on-green.svg';

function ListarUsu() {
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
                    <div class="content-title-list">
                        <h2 class="main-title text-center">LISTA DE USUARIOS</h2>

                        <form class="main-form" action="">

                        <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >
                                    <option value="/listarUsuario">Listar Usuarios</option>
                                    <option value="/crearusuario">Crear Usuario</option>
                                </select>

                                <div className="content-search">
                                    <input className="search form-control" type="text" placeholder="Buscar..." />
                                    <img className="search-icon" src={search} alt="" />
                                </div>
                            </div>

                            <div class="content-table">
                                <table class="main-table table table-bordered">
                                    <tr>
                                        <th class="space text-center">ID</th>
                                        <th class="space text-center">Nombre</th>
                                        <th class="space text-center">Apellidos</th>
                                        <th class="space text-center">Documento</th>
                                        <th class="space text-center">Rol</th>
                                        <th class="space text-center">Fecha de creado</th>
                                        <th class="space text-center">Estado</th>
                                        <th class="space text-center action">Acciones</th>
                                    </tr>
                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleGreen} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleGreen} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleGreen} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleGreen} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleGreen} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleGreen} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="space">0001</td>
                                        <td class="space">Maria Andrea</td>
                                        <td class="space">Jaramillo Ossa</td>
                                        <td class="space">1054.537.908</td>
                                        <td class="space">Empleado</td>
                                        <td class="space">10/09/2021</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarUsuario"><img class="edit" src={edit}
                                                    alt="" /></a>
                                                <img class="toggle" src={toggleRed} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                </table>
                            </div>
                            <div class="content-button d-flex justify-content-end">

                            <div class="content-generate-report d-flex align-items-center">
                                <label class="me-2" for="">Generar Reporte</label>
                                <select class="period-selection me-3" name="" id="">
                                    <option value="">Semanal</option>
                                    <option value="">Mensual</option>
                                    <option value="">Trimestral</option>
                                </select>
                                <input class="generate-button" type="submit" value="Generar" />
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

export default ListarUsu;