import React, { Component } from "react";
import "../css/Land.css";
class CreateSuscriber extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contenedorFila fila1" >
          <div className="col p-0">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Landimg1.jpg"
              width="100%"
              height="110%"
              alt="Dojo"
            ></img>
          </div>
          <div className="col fila1">
            <div className="pt-4 pb-4 ">
              <center>
                <h3 className="mb-4 font-weight-bold titulo1">
                  Conecte con su audiencia de manera sencilla
                </h3>
                <p className="mt-4 col text-justify font-weight-bold texto1">
                  Cree preguntas mediante las que podrá recibir feedback de
                  cualquier tema que usted desee, sin tener que preocuparse por
                  crear formularios de respuesta o complejas herramientas de
                  valoración.
                </p>
              </center>
            </div>
          </div>
        </div>

        <div className="contenedorFila">
          <div
            className="col"
            style={{ backgroundColor: "#FFFFFF", bordeRadius: "5px" }}
          >
            <div className=" d-flex align-items-center">
              <center>
                <h3 className="mt-2 mb-4 col font-weight-bold titulo2">
                  Obtenga resultados sin importar el tamaño de su audiencia
                </h3>
                <p className="mt-4 col text-justify font-weight-bold texto2">
                  Podrá consultar las respuestas a sus preguntas, recibirá un
                  resumen de los resultados hasta el momento, no debe
                  preocuparse por la cantidad de respuestas y aún menos por
                  procesar los resultados, DOJO lo hará por tí de forma
                  sencilla.
                </p>
              </center>
            </div>
          </div>
          <div className="col p-0">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Landimg2.jpg"
              width="100%"
              height="100%"
              alt="Dojo"
            ></img>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateSuscriber;
