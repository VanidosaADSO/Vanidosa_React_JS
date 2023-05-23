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
import toggleGreen from '../assets/img/toggle-on-green.svg';
import edit from '../assets/img/edit.svg';
import search from '../assets/img/search.svg';

function ListaRol() {
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

                        <a className="content-link-menu d-flex align-items-center active" href="/crearRol">
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
                    <div className="content-title-list">
                        <h2 className="main-title text-center">LISTA DE ROLES</h2>

                        <form className="main-form" action="">

                        <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >
                                    <option value="/listaRol">Listar Rol</option>
                                    <option value="/crearRol">Crear Rol</option>
                                    </select>

                                <div className="content-search">
                                    <input className="search form-control" type="text" placeholder="Buscar..." />
                                    <img className="search-icon" src={search} alt="" />
                                </div>
                            </div>

                            <div className="content-table">
                                <table className="main-table table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="space text-center">ID</th>
                                            <th className="space text-center">Nombre de Rol</th>
                                            <th className="space text-center">Fecha de creado</th>
                                            <th className="space text-center">Permisos</th>
                                            <th className="space text-center">Estado</th>
                                            <th className="space text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="space">001</td>
                                            <td className="space">Administrador</td>
                                            <td className="space">24/Julio/2021</td>
                                            <td className="">Dashboard, Roles, Usuarios, Insumos, Proveedores, Compras, Servicios, Clientes, Citas</td>
                                            <td className="space">Activo</td>
                                            <td className="space action d-flex justify-content-center">
                                                <div className="content-icon-action">
                                                    <a href="/modificarRol"><img className="edit" src={edit} alt="" /></a>
                                                    <img className="toggle" src={toggleGreen} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="space">002</td>
                                            <td className="space">Empleado</td>
                                            <td className="space">24/Julio/2021</td>
                                            <td className="">Dashboard, Insumos, Proveedores, Compras, Servicios, Clientes, Citas</td>
                                            <td className="space">Activo</td>
                                            <td className="space action d-flex justify-content-center">
                                                <div className="content-icon-action">
                                                    <a href="/modificarRol"><img className="edit" src={edit} alt="" /></a>
                                                    <img className="toggle" src={toggleGreen} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                    <tr>
                                        <td class="space">003</td>
                                        <td class="space">Cliente</td>
                                        <td class="space">24/Julio/2021</td>
                                        <td class="">Servicios, Clientes, Citas</td>
                                        <td class="space">Activo</td>
                                        <td class="space action d-flex justify-content-center">
                                            <div class="content-icon-action">
                                                <a href="/modificarRol"><img class="edit" src={edit} alt="" /></a>
                                                <img class="toggle" src={toggleGreen} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </form>
            </div>
        </div >
            </div >
        </>
    );
}

export default ListaRol;