import React from "react";
import Header2 from '../Headers/HeaderServicio';
import Footer from '../Headers/Footer';
import img3 from '../assets/img/img3.jpeg';
import whatsapp from '../assets/img/whatsapp.svg';
import img2 from '../assets/img/img2.jpg';

function Servicio() {
  return (
    <>
     <Header2/>
      <main>
        <h2 className="titulo-servicios">PARA TI NUESTROS SERVICIOS</h2>

        <div className="texto_servi">
          <p>
            Para ti nuestros servicios son los más importantes; por eso siempre
            pensamos en complacerte, en darte una muy buena atención y ofrecerte
            todos los servicios de belleza que necesites en un solo lugar
          </p>
        </div>

        <center>
          <div className="carrucel"></div>
        </center>

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="img-servi" src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>

            <div className="carousel-item">
              <img className="img-servi" src={img2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>

            <div className="carousel-item">
              <img
                className="img-servi d-block w-100"
                src="../assets/img/img4.jpg"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
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


export default Servicio;