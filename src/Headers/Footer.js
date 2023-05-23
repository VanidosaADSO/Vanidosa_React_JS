import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor-footer">
        <div className="content-foo">
          <h5>AYUDA</h5>
          <p>Apoyo <br />
            Solución de problemas<br />
            Contáctenos</p>
        </div>
        <div className="content-foo">
          <h5>LEIDY JOHANA</h5>
          <p>Tu especialista <br />
            encabello, uñas <br />
            y pestañas
          </p>
        </div>
        <div className="content-foo">
          <h5>AVISO LEGAL</h5>
          <p>política de privacidad <br />
            política de cookies <br />
            diseñador web - Grupo vanisoft</p>
        </div>
      </div>
      <h2 className="titulo-final">&reg; Programadores | | Grupo vanisoft </h2>
    </footer>
  );
}

export default Footer;
