import React from 'react';
import Header from '../Headers/Header';
import inicio from '../assets/img/inicio.svg';
import usuarios from '../assets/img/usuarios.svg';
import insumos from '../assets/img/insumos.svg';
import proveedores from '../assets/img/proveedores.svg';
import compras from '../assets/img/compras.svg';
import servicio from '../assets/img/servicios.svg';
import clientes from '../assets/img/clientes.svg';
import roles from '../assets/img/roles.svg';
import cita from '../assets/img/citas.svg';
import logofull from '../assets/img/logo-full.svg';





function Home() {

    return (
        <>
            <Header />
            <main>
                <div className="content-dash d-flex">
                    <aside className="menu">
                        <div className="content-menu">
                            <a className="content-link-menu d-flex align-items-center active" href="/home">
                                <div className="content-icon-menu d-flex justify-content-center">
                                    <img className="icon-menu" src={inicio} alt="" />
                                </div>
                                <span className="text-menu">Inicio</span>
                            </a>


                            <a className="content-link-menu d-flex align-items-center" href="/crearRol">
                                <div className="content-icon-menu d-flex justify-content-center">
                                    <img className="icon-menu" src={roles} alt="" />
                                </div>
                                <span className="text-menu">Roles</span>
                            </a>


                            <a className="content-link-menu d-flex align-items-center" href="/crearusuario">
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
                    <div className="content-main">
                        <img className="main-logo" src={logofull} alt="" />
                    </div>
                </div>
            </main>
            <script src="../assets/js/funcionesClientes.js"></script>
        </>
    );
}

export default Home;

