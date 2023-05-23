import React from "react";
import Header6 from '../Headers/HeaderContacto';
import whatsapp from '../assets/img/whatsapp.svg';
import iconogmail from '../assets/img/iconogmail.png';
import iconollamada from '../assets/img/iconollamada.png';
import iconolocation from '../assets/img/iconolocation.png';
import Footer from "../Headers/Footer";

function ContactoCL() {
  return (
    <>
    <Header6/>
      <main>
        <div className="contenedor">
          <div className="cuadro-contac">
            <h1 className="mt-5">Contacto</h1>
            <p className="pppp">
              Aquí encontrarás información de contacto del salón Vanidosa / Spa,{" "}
              <br />
              de la empresa y de los proveedores del sistema
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="contenedor2">
              <div className="cua1">
                <h2 className="ti1">Empresaria</h2>
                <p className="textos-contac">
                  Nombre: Johana Álvarez <br />
                  Gmail: Johaalvo@hotmail.com <br />
                  Contacto: 301-345-76-98
                </p>
                <img className="img-contact" src={iconogmail} alt="" />
                <img className="img-contact" src={iconollamada} alt="" />
              </div>
              <div className="cua2">
                <h2 className="ti2">Spa Vanidosa</h2>
                <p className="textos-contac">
                  Gmail: Salonyspa@outlok.es<br />
                  Contacto: 234-546-87-09 <br />
                  Ubicación: Laureles
                </p>
                <img className="img-contact" src={iconogmail} alt="" />
                <img className="img-contact" src={iconollamada} alt="" />
                <img className="img-contact" src={iconolocation} alt="" />
              </div>
              <div className="cua3">
                <h2 className="ti3">Desarrolladores</h2>
                <p className="textos-contac texto-desa">
                  Gmail: Vanidosa22adso@gmail.com<br />
                  Contacto: 301-345-76-98
                </p>
                <img className="img-contact" src={iconogmail}alt="" />
                <img className="img-contact" src={iconollamada} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <a
        className="Link-whatsapp d-flex justify-content-center"
        href=""
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={whatsapp} alt="" style={{ width: "36px" }} />
      </a>
    <Footer/>
    </>
  );
}


export default ContactoCL;