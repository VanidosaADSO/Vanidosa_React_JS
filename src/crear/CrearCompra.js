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


function CrearCompra() {
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

                        <a className="content-link-menu d-flex align-items-center" href="/proveedores">
                            <div className="content-icon-menu d-flex justify-content-center">
                                <img className="icon-menu" src={proveedores} alt="" />
                            </div>
                            <span className="text-menu">Proveedores</span>
                        </a>

                        <a className="content-link-menu d-flex align-items-center active" href="/compras">
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
                        <h2 class="main-title text-center">REGISTRAR COMPRAS</h2>

                        <form class="main-form" action="">

                            <div className="content-select-search d-flex justify-content-between">
                                <select
                                    className="select-main form-select"
                                    size="1"
                                    onChange={(event) =>
                                        window.location.href = event.target.value
                                    }
                                >

                                    <option value="/compras">Crear Compra</option>
                                    <option value="/listarCompra">Listar Compra</option>

                                </select>
                            </div>

                            <div class="field-content-compras d-flex justify-content-between">

                                <div class="container-fpfp d-flex">
                                    <div class="content-fpfp">
                                        <div class="content-label-input-compras">
                                            <label for="">Número de factura</label>
                                            <input class="general-input-compras form-control" type="number" id="factura" />
                                        </div>

                                        <div class="content-label-input-compras">
                                            <label for="">Medio de Pago</label>
                                            <select name="" class="general-input-compras form-select" id="pago">
                                                <option selected>Seleccione</option>
                                                <option value="">Transferencia</option>
                                                <option value="">Efectivo</option>
                                                <option value="">Credito</option>
                                            </select>
                                        </div>

                                        <div class="content-label-input-compras">
                                            <label for="">Fecha</label>
                                            <input class="general-input-compras form-control" type="date" id="fecha" />
                                        </div>

                                        <div class="content-label-input-compras">
                                            <label for="">Proveedor</label>
                                            <select name="" class="general-input-compras form-select" id="proveedor">
                                                <option selected>Seleccione</option>
                                                <option value="">Opcion 1</option>
                                                <option value="">Opcion 2</option>
                                                <option value="">Opcion 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="container-icp d-flex justify-content-end">
                                    <div class="content-icp">
                                        <div class="content-label-input-compras">
                                            <label for="">Insumo</label>
                                            <select name="" class="general-input-compras form-select" id="producto">
                                                <option selected>Seleccione</option>
                                                <option value="">Opcion 1</option>
                                                <option value="">Opcion 2</option>
                                                <option value="">Opcion 3</option>
                                            </select>
                                        </div>

                                        <div class="content-label-input-compras">
                                            <label for="">Cantidad</label>
                                            <input class="general-input-compras form-control" type="number" id="cantidad" />
                                        </div>

                                        <div class="content-label-input-compras">
                                            <label for="">Precio</label>
                                            <input class="general-input-compras form-control" type="number" id="precio" />
                                        </div>

                                        <div class="content-label-input-compras">
                                            <label for="">Total factura</label>
                                            <input class="general-input-compras form-control bg-tf" type="number" id="precio" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input class="add-product" type="submit" id="btnRegistrar" value="Agregar producto" />
                                </div>
                            </div>

                        </form>

                        <div class="content-table">
                            <table class="main-table table table-bordered">
                                <tr>
                                    <th class="space text-center">N_Factura</th>
                                    <th class="space text-center">Medio Pago</th>
                                    <th class="space text-center">Fecha</th>
                                    <th class="space text-center">Proveedor</th>
                                    <th class="space text-center">Producto</th>
                                    <th class="space text-center">Precio</th>
                                    <th class="space text-center">Cantidad</th>

                                </tr>
                                <tr>
                                    <td class="space">0001</td>
                                    <td class="space">Efectivo</td>
                                    <td class="space">12/2/1799</td>
                                    <td class="space">Bogge</td>
                                    <td class="space">Aceite</td>
                                    <td class="space">4</td>
                                    <td class="space">98.000</td>
                                </tr>

                                <tr>
                                    <td class="space">0001</td>
                                    <td class="space">Efectivo</td>
                                    <td class="space">12/2/1799</td>
                                    <td class="space">Bogge</td>
                                    <td class="space">Shampoo</td>
                                    <td class="space">3</td>
                                    <td class="space">58.000</td>
                                </tr>


                                <tr>
                                    <td class="space">0001</td>
                                    <td class="space">Efectivo</td>
                                    <td class="space">12/2/1799</td>
                                    <td class="space">Bogge</td>
                                    <td class="space">Guantes</td>
                                    <td class="space">28</td>
                                    <td class="space">108.000</td>
                                </tr>

                                <tr>
                                    <td class="space">0001</td>
                                    <td class="space">Efectivo</td>
                                    <td class="space">12/2/1799</td>
                                    <td class="space">Bogge</td>
                                    <td class="space">Cepillo</td>
                                    <td class="space">8</td>
                                    <td class="space">208.000</td>
                                </tr>

                            </table>

                            <div class="content-button d-flex justify-content-center">
                                <div class="content-send-clear">
                                    <input class="clear-button" type="reset" value="Limpiar" />
                                    <input class="send-button" type="submit" id="btnRegistrar" value="Registrar" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <script src="../assets/js/funcionesClientes.js"></script>
                <script src="../assets/js/ValidarCompras.js"></script>
            </div>
        </>
    );
}

export default CrearCompra;