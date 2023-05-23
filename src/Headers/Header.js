import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/header.css';
import '../assets/css/menu.css';
import '../assets/css/main.css';
import '../assets/css/login-modal.css';
import logo from '../assets/img/logo.svg';
import perfil from '../assets/img/perfil-2.png';
import settingsIcon from '../assets/img/settings.svg';
import spaIcon from '../assets/img/spa.svg';
import logoutIcon from '../assets/img/logout.svg';
import search from '../assets/img/search.svg';


const Modal = ({ mostrarModal, cerrarModal }) => {
  return mostrarModal ? (
    <div className="account-modal-container-end">
      <div className="header-modal-account">
        <div className="content-img-account-modal d-flex justify-content-center">
          <img className="img-account-modal" src={perfil} alt="" />
        </div>

        <div className="d-flex justify-content-center">
          <span className="name-modal text-center">JUAN CARLOS PÉREZ</span>
        </div>

        <div className="d-flex justify-content-center">
          <span className="email-modal text-center">sebasydan@gmail.com</span>
        </div>
      </div>

      <div className="container-setting-admin d-flex align-items-center">
        <div className="content-setting-admin">
          <div className="content-account-settings d-flex align-items-center">
            <img className="icon-account-settings" src={settingsIcon} alt="" />
            <a className="account-settings" href="">Configurar mi cuenta</a>
          </div>
          <div className="content-admin-panel d-flex align-items-center">
            <img className="icon-main-page" src={spaIcon} alt="" />
            <Link className="admin-panel" to="/">Página principal</Link>
            {/* <Link className="nav-link  " to="/">Página principal</Link> */}
          </div>
        </div>
      </div>
      <div className="container-login-modal">
        <div className="content-login-modal d-flex align-items-center">
          <img className="icon-logout" src={logoutIcon} alt="" />
          <a className="login-modal" href="/login">Cerrar sesión</a>
        </div>
      </div>
    </div>
  ) : null;
};

function Header() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };
  return (
    <header className="header">
      <nav className="nav d-flex">
        <div className='content-logo d-flex align-items-center justify-content-center'>
        <a href="/home"><img className="logo-font" src={logo} alt="logo" /></a>
        </div>

        {/* <div className="content-img-perfil d-flex align-items-center justify-content-end">
          <a href=""><img className="img-perfil" src={perfil} alt=""></a>
        </div> */}
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

      </nav>


      {/* End Modal Login */}
    </header>
  );
}

export default Header;
