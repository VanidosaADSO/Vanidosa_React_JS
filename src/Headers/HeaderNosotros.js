import React, { useState } from 'react';
import '../assets/css/login-modal.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/catalogo.css';
import '../assets/css/citas.css';
import '../assets/css/contacto.css';
import '../assets/css/login-modal.css';
import '../assets/css/nosotros.css';
import '../assets/css/servicios.css';
import '../assets/css/register-login.css';
import '../assets/css/Ventas.css';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';
import perfil from '../assets/img/perfil.png';
import settings from '../assets/img/settings.svg';
import dashboard from '../assets/img/dashboard.svg';
import { Link } from 'react-router-dom';
import logout from '../assets/img/logout.svg';

const Modal = ({ mostrarModal }) => {
  return mostrarModal ? (
        <div className="account-modal-container-end">
          <div className="header-modal-account">
            <div className="content-img-account-modal d-flex justify-content-center">
              <img className="img-account-modal" src={perfil} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <span className="name-modal text-center">XIOMARA DUQUE</span>
            </div>
            <div className="d-flex justify-content-center">
              <span className="email-modal text-center">xduque@gmail.com</span>
            </div>
          </div>

          <div className="container-setting-admin d-flex align-items-center">
            <div className="content-setting-admin">
              <div className="content-account-settings d-flex align-items-center">
                <img className="icon-account-settings" src={settings} alt="" />
                <Link className="account-settings" to="/configuracion-cuenta">Configurar mi cuenta</Link>
              </div>
              <div className="content-admin-panel d-flex align-items-center">
                <img className="icon-admin-panel" src={dashboard} alt="" />
                <Link className="admin-panel" to="/home">Panel administrativo</Link>
              </div>
            </div>
          </div>
          <div className="container-login-modal">
        <div className="content-login-modal d-flex align-items-center">
          <img className="icon-logout" src={logout} alt="" />
          <a className="login-modal" href="/login">Iniciar sesión</a>
        </div>
      </div>
        </div>
  ) : null;
};

function Inicio () {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };
  return (
    <header>
      <a href="/"><img className="img-logo" src={logo} alt="logo" /></a>
      <div className="content-header d-flex justify-content-center align-items-end">
        <nav className="d-flex align-items-center">
          <div className="content-nav-link d-flex">
            <Link className="nav-link " to="/">INICIO</Link>
            {/* <Link className="nav-link" to="/servicio">SERVICIOS</Link> */}
            <Link className="nav-link" to="/catalogo">CATÁLOGO</Link>
            <Link className="nav-link " to="/agendarcitas">AGENDAR</Link>
            <Link className="nav-link active2" to="/nosotros">NOSOTROS</Link>
            <Link className="nav-link" to="/contacto">CONTACTO</Link>
          </div>
        </nav>
      </div>
    
        <div className="container-icon-header d-flex">
          <a className="content-icon-header d-flex" href="">
            <img
              className="icon-header"
              src={search}
              alt=""
              style={{ width: '22px' }}
            />
          </a>
          <a className="content-img-account d-flex" href="#" onClick={abrirModal}>
            <img
              className="img-account"
              src={perfil}
              alt=""
              style={{ width: '38px' }}
            />
          </a>
          <Modal mostrarModal={mostrarModal} cerrarModal={cerrarModal} />
        </div>
      
    </header>
  );

};

export default Inicio;
