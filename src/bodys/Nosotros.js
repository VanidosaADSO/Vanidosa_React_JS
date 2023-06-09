import React from "react";
import Header5 from '../Headers/HeaderNosotros';
import whatsapp from '../assets/img/whatsapp.svg';
import logito from '../assets/img/logito.png';
import Footer from "../Headers/Footer";

function NosotrosCl() {
  return (
    <>
    <Header5/>
      <main>
        <div className="wave" style={{ height: "150px", overflow: "hidden" }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
            <path d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,-0.00 L0.00,-0.00 Z" style={{ stroke: "none", fill:"#137B93" }}></path>
          </svg>
        </div>

        <div className="logito">
          <img src={logito} alt="" />
        </div>

        <div className="escrito_noso">
          <h2>&reg; Johana Alvarez / Spa</h2>
        </div>

        <div>
          <p className="texto_nosotros">Somos Vanidosa Spa; con las mejores líneas de productos de belleza.
            Nos dirigimos a clientes femeninos y masculinos que son
            conscientes de la moda y tienen ingresos disponibles.
            Nuestros clientes son en su mayoría mujeres,
            pero nos aseguraremos de incluir a hombres
            que también cumplan con los criterios.
          </p>
        </div>
      </main>
      <a
        className="Link-whatsapp d-flex justify-content-center"
        href=""
      >
        <img
          src={whatsapp}
          alt=""
          style={{ width: "36px" }}
        />
      </a>
      <Footer/>
    </>
  );
}


export default NosotrosCl;