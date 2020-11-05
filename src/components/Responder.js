import React, { Component } from "react";
import axios from "axios";
import "../css/respuesta.css";
class CrearPreguntas extends Component {
  state = {
    pregunta:"",
    respuesta: "",
    autorPregunta: "",
    tema: "",
    codigoPregunta: "",
    estado:"noVisible"
  };
 despertar(){
    axios
      .post('https://dojo-backend-api.herokuapp.com/Despertar')
      .then((res) => {
      
        
      })
      .catch((err) => {})
  };
  cambiarInput = (e) => {
    switch (e.target.name) {
      case "codigoPregunta":
        this.setState({ codigoPregunta: e.target.value });
        break;
        case "respuesta":
        this.setState({ respuesta: e.target.value });
        break;
      default:
        break;
    }
  };

  manejarSubmit = (e) => {
    e.preventDefault();
    const peti = {
      respuesta: this.state.respuesta,
      codigoPregunta: this.state.codigoPregunta
    };
    const URL = "https://dojo-backend-api.herokuapp.com/CrearRespuesta";
    axios
      .post(URL, peti)
      .then((res) => {
        alert(
          "Respuesta Creada Correctamente! ✔"
        );
        
      })
      .catch((err) => alert("Error al registrar la respuesta 😢"));
  };

  manejarBusqueda = (e) => {
    e.preventDefault();
    const jsonBuscar = {
      codigoPregunta: this.state.codigoPregunta
    };
    const URLBuscar = "https://dojo-backend-api.herokuapp.com/ObtenerPregunta";
    axios
      .post(URLBuscar, jsonBuscar)
      .then((res) => {
        if (res.data==null){
          alert("El código utilizado no es correcto 😢 " ) 
        }else{
          this.setState({ tema: res.data.tema });
          this.setState({ autorPregunta: res.data.autorPregunta });
          this.setState({ pregunta: res.data.pregunta });
          this.setState({ estado: "visible"});
        }
      })
      .catch((err) => alert("Error al buscar la pregunta 😢"));
  };
  
  render() {
    return (
      <React.Fragment>
        {this.despertar()}
        <div className="contenedorFila">
          <div className="col p-0">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Responder.jpg"
              width="100%"
              height="100%"
              alt="Dojo"
            ></img>
          </div>
          <div className="col">
            <div className="mt-4 mr-4 mb-4 ">
              <center>
                <h1 className="m-4">Responde aquí</h1>
              </center>
              <form>
                <div className="form-group">
                  <div className="contenedorFila">
                    <div className="col mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Código Pregunta"
                        name="codigoPregunta"
                        value={this.state.codigoPregunta}
                        onChange={this.cambiarInput}
                      />
                    </div>
                    <div className="col mt-3">
                      <center>
                        <button
                          style={{
                            backgroundColor: "#3F066C",
                            border: "'#3F066C' solid ",
                          }}
                          onClick={this.manejarBusqueda}
                          type="submit"
                          className="btn btn-primary"
                        >
                          Buscar
                        </button>
                      </center>
                    </div>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col">
                    <center>
                      <h2 className="text-left">
                        {this.state.tema} 
                      </h2>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col">
                    <center>
                      <h6 className="text-left">
                        Por: {" "+this.state.autorPregunta}
                      </h6>
                    </center>
                  </div>
                </div>

                <div className="contenedorFila m-4">
                  <div className="col ">
                    <center>
                      <p className={this.state.estado +' text-justify'}>
                        {this.state.pregunta} 
                      </p>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado + " form-group"}>
                  <div className="col">
                    <textarea
                      className="form-control"
                      rows="10"
                      placeholder="Escribe tu respuesta..."
                      name="respuesta"
                      onChange={this.cambiarInput}
                    ></textarea>
                  </div>
                  <div className=" mt-3">
                    <div className="col"></div>
                   
                  </div>
                </div>
                <div className={this.state.estado + " mt-3"}>
                      <div className="col m-3">
                        <center>
                          <button
                            style={{
                              backgroundColor: "#3F066C",
                              border: "'#3F066C' solid ",
                            }}
                            onClick={this.manejarSubmit}
                            type="submit"
                            className="btn btn-primary"
                          >
                            Registrar respuesta
                          </button>
                  <h6 className="mt-3 text-muted">No compartiremos tu respuesta con nadie 😉</h6>
                        </center>
                      </div>
                    </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CrearPreguntas;
