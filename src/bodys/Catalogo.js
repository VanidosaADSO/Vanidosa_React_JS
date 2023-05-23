import React from "react";
import Header4 from '../Headers/HeaderCatalogo';
import pro1 from '../assets/img/pro1.png';
import pro2 from '../assets/img/pro2.png';
import pro3 from '../assets/img/pro3.png';
import whatsapp from '../assets/img/whatsapp.svg';
import Footer from "../Headers/Footer";

function Catalogo() {
  return (
    <>
    <Header4/>
      <main>
        <center>
          <h2 className="catalogo_l">NUESTRO CATÁLOGO</h2>
        </center>
        <div className="body_catalogo">
          <div className="producto">
            <img src={pro3} alt="" className="produto__img" />
            <div className="productDescription">
              <h3 className="produto__title">Pestañas pelo a pelo</h3>
              <span className="produto__price">$70.000</span>
              <br />
              <span>2hr o 3hr apróx</span>
            </div>
            <a href="">
              <i className="produto__icon fas fa-cart-plus"></i>
            </a>
          </div>
          <div className="producto">
            <img src={pro1} alt="" className="produto__img" />
            <div className="productDescription">
              <h3 className="produto__title">Keratina</h3>
              <span className="produto__price">$200.000</span>
              <br />
              <span>3hr o 4hr apróx</span>
            </div>
            <a href="">
              <i className="produto__icon fas fa-cart-plus"></i>
            </a>
          </div>
          <div className="producto">
            <img src={pro2} alt="" className="produto__img" />
            <div className="productDescription">
              <h3 className="produto__title">Uñas acrilicas</h3>
              <span className="produto__price">$90.000</span>
              <br />
              <span>2hr apróx</span>
            </div>
            <a href="">
              <i className="produto__icon fas fa-cart-plus"></i>
            </a>
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


export default Catalogo;