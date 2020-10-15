import React, { Component } from "react";
import "../css/respuesta.css";
class CrearPreguntas extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contenedorFila">
          <div className="col p-0">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/GusGarc%C3%ADa.jpg"
              width="100%"
              height="100%"
              alt="Dojo"
            ></img>
          </div>
          <div className="col p-0">
            <div className="fila1 p-0 pb-3">
              <div className="col p-0">
                <center>
                  <h2 className="text-center pt-4">Qué es DOJO?</h2>
                </center>
              </div>

              <div className="contenedorFila mb-4">
                <div className="col mt-4 mb-4 ">
                  <center>
                    <p className="text-justify  acerca px-4">
                      Dojo es un poyecto destinado a aprovechar la inteligencia
                      artifical en el procesamiento de respuestas en forma de
                      texto, con la finalidad de evitar la intervención humana
                      en el proceso de evaluación, DOJO son la iniciales de
                      Data, Objective, Judgment, Overview, y tiene como
                      finalidad estudiar la capacidad de las máqeuinas de
                      brindar una respuesta a algo tan abstracto como la opinión
                      humana.
                    </p>
                  </center>
                </div>
              </div>
            </div>

            <div className="contenedorFila">
              <div className="col mt-4 ">
                <center>
                  <h2 className="text-center  mt-4">
                    Cuál es la diferencia con DOJO?
                  </h2>
                </center>
              </div>
            </div>

            <div className="contenedorFila1 ">
              <div className="col mt-4 ">
                <center>
                  <p className="text-justify acerca px-4 pb-4">
                    DOJO se diferencia de otras apliaciones de recolección de
                    información, no solo por la ventaja que ofrece al permitir
                    conocer los resultados de forma directa, sino que esta
                    plataforma analiza las respuestas de manera arbitraria a
                    travéz de Inteligencia artificial, por lo que no importa la
                    cantidad de datos que se procesen se podrá obtener
                    resultados en forma de resumen, beneficiando a los
                    interesados en conocer la opinion de los individuos de forma
                    rápida y directa.
                  </p>
                </center>
              </div>
              <div className="col mt-4 ">
                <h6 className="text-right acerca  pb-4">
                  <img
                    className="colorImagen"
                    src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Github.png"
                    width="100%"
                    height="100%"
                    alt="Dojo"
                  ></img>
                  @Gus657.
                </h6>

                <h6 className="text-right acerca  pb-4">
                  <img
                    className="colorImagen"
                    src="https://raw.githubusercontent.com/Gus657/Imagenes/master/mail.png"
                    width="100%"
                    height="100%"
                    alt="Dojo"
                  ></img>
                  ggusperezg@gmail.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CrearPreguntas;
