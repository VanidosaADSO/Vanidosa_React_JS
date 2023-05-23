import React from "react";
import HeaderMain from './HeaderMain';
//import Footer from "./Footer";
import whatsapp from '../assets/img/whatsapp.svg';

function Registrar(){
    return(
        <>
        <HeaderMain/>
         <div className="content-registration-form d-flex justify-content-center align-items-center">
            <div className="registration-form">
                <h2 className="text-center align-items-center titulo-registro">REGISTRO</h2>
                <form action="">
                    <input id="name" className="access-input form-control" type="text" placeholder="Nombre" required />
                    <input className="access-input form-control" type="text" placeholder="Apellidos" required />

                    <select className="access-input form-select select" name="tipoDocumento" id="tipoDocumento">
                        <option value="0">Tipo de documento</option>
                        <option value="1">Cédula de ciudadanía</option>
                        <option value="2">Cédula de extranjería</option>
                        <option value="3">Tarjeta de identidad</option>
                    </select>

                    <input className="access-input form-control" type="text" placeholder="Documento" required />
                    <input className="access-input form-control" type="date" placeholder="Fecha de nacimiento" required />
                    <input className="access-input form-control" type="text" placeholder="Dirección" />
                    <input className="access-input form-control" type="number" placeholder="Teléfono" />
                    <input className="access-input form-control" type="email" placeholder="Correo" required /><br />
                    <input className="access-input form-control" type="password" placeholder="Contraseña" required />

                    <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
                </form>

                <div className="boton-registro">
                    <button id="btnRegistrar" className="btn btn-primary" type="submit">Registrar</button>
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
        {/* <Footer/> */}
        </>
    );
}


export default Registrar;