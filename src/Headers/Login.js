import React from "react";
import HeaderMain from './HeaderMain'
import Footer from "./Footer";
import whatsapp from '../assets/img/whatsapp.svg';

function Login() {
    return (
        <>
            <HeaderMain />
            <div className="text-center">
                <img src="../assets/img/logo.svg" alt="" />
                <div className="content-form d-flex justify-content-center align-items-center">
                    <div>
                        <h2>INICIO DE SESIÓN</h2>
                        <div id="respuesta"></div>
                        <form id="formulario" className="input-inicio">
                            <input type="text" placeholder="Nombre" id="nombre" required /> <br />
                            <input type="text" placeholder="Contraseña" id="contraseña" required /><br />
                            <p>¿No tienes cuenta? <a href="/registro">Regístrate</a></p>
                        </form>
                        <button className="btn btn-primary bnt-loguear" id="registrar" type="submit" value="Registrar">ENTRAR</button>
                    </div>
                </div>
                <a
        className="Link-whatsapp d-flex justify-content-center"
        href=""
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={whatsapp} alt="" style={{ width: "36px" }} />
      </a>
            </div>

            <Footer />
        </>
    );

}

export default Login;