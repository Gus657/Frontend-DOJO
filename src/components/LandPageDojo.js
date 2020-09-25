import React, { Component } from "react";
import '../css/Land.css'
class CreateSuscriber extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-between " style={{ backgroundColor: '#ebe1f2'}}>
          <div className="col-5">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Landimg1.jpg"
              width="100%"
              height="100%"
            ></img>
          </div>
          <div className="col-7"  style={{ backgroundColor: '#ebe1f2'}}>
            <div className="mt-4 mr-4 mb-4 " >
              <center>
              <h3 className="mb-4 font-weight-bold titulo1">Conecte con su aduiencia de manera sencilla</h3>
              <p className="mt-4 col-10 text-justify font-weight-bold texto1">Cree preguntas mediante las que podrá recibir feedback de cualquier tema
                 que usted desee, sin tener que preocuparse por crear formularios de respuesta 
                 o complejas herramientas de valoración.</p>
              </center>
            </div>
          </div>
        </div>
        
        <div className="row d-flex justify-content-between " style={{ backgroundColor: '#ffffff'}}>
          <div className="col-6"  style={{ backgroundColor: '#FFFFFF', "border-radius":'5px'}}>
            <div className=" d-flex align-items-center" >
              <center>
                <h3 className="mt-4 mb-4 col-10 font-weight-bold titulo2">Obtenga resultados sin importar el tamaño de su audiencia</h3>
                <p className="mt-4 mx-4 col-10 text-justify font-weight-bold texto2">Podrá consultar las respuestas a sus preguntas, recibirá un resumen 
                de los resultados hasta el momento, no debe preocuparse por la cantidad de respuestas y 
                aún menos por procesar los resultados, DOJO lo hará por tí de forma sencilla.</p>
              </center>
            </div>
          </div>
          <div className="col-6">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Landimg2.jpg"
              width="100%"
              height="100%"
            ></img>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateSuscriber;
