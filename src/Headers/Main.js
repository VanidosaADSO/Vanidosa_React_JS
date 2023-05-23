import React from 'react';
import imagen1 from '../assets/img/main.png';
import imagen2 from '../assets/img/whatsapp.svg';
import HeaderMain from './HeaderMain';
import Footer from './Footer';
function Cuerpo() {
  return (
    <>
    <HeaderMain/>  
    <main>
      <div className="content-btn-main d-flex">
        <a className="btn-main d-flex justify-content-center align-items-center" href="/agendarcitas">Agendar una cita</a>
        <a className="btn-main d-flex justify-content-center align-items-center" href="/catalogO">Ver productos</a>
      </div>
      <img className='main-img' src={imagen1} alt="Mi imagen" />
      <a className="Link-whatsapp d-flex justify-content-center" href="/">
        <img className='main-img' src={imagen2} alt="Mi imagen" style={{ width: "36px" }} />
      </a>
    </main>
    <Footer/>
    </>
  );
}

export default Cuerpo;
