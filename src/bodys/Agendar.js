import React from "react";
import Header3 from '../Headers/HeaderCita';
import whatsapp from '../assets/img/whatsapp.svg';
import Footer from "../Headers/Footer";

function Agendar() {
  return (
    <>
    <Header3/>
    <main>
      <br />
      <div className="cuadro_citas">
        <h2>AGENDA TU CITA</h2>
        <form id="formulario" className="input-inicio">
          <input type="text" placeholder="Servicio" id="servicio" /> <br />
          <input type="text" placeholder="Tipo de servicio" id="tipo-de-servicio" />
          <br />
          <input type="text" placeholder="Fecha de nacimiento" id="nacimiento" onFocus={(e) => e.target.type = 'date'} />
          <br />
          <input type="text" placeholder="hora" id="hora" onFocus={(e) => e.target.type = 'time'} />
          <br />
          <input type="text" id="observaciones" placeholder=" Observaciones: Ej     Soy alergica a la base vogue" />
          <div className="boton-citas">
            <button className="btn btn-primary bnt-loguear" id="registrar" type="submit" value="Registrar">
              AGENDAR
            </button>
          </div>
        </form>
      </div>
      <a className="Link-whatsapp d-flex justify-content-center" href="">
        <img src={whatsapp} alt="" style={{ width: "36px" }} />
      </a>
    </main>
    <Footer />
    </>
  );
}


export default Agendar;