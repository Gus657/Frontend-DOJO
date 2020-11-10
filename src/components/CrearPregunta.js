import React, { Component } from "react";
import axios from "axios";

class CrearPreguntas extends Component {
  state = {
    email: "",
    pregunta: "",
    autorPregunta: "",
    tema: "",
    codigoPregunta: "",
    codigoAcceso: "",
  };

  cambiarInput = (e) => {
    switch (e.target.name) {
      case "email":
        this.setState({ email: e.target.value });
        break;

      case "pregunta":
        this.setState({ pregunta: e.target.value });
        break;

      case "autorPregunta":
        this.setState({ autorPregunta: e.target.value });
        break;

      case "tema":
        this.setState({ tema: e.target.value });
        break;

      case "codigoPregunta":
        this.setState({ codigoPregunta: e.target.value });
        break;

      case "codigoAcceso":
        this.setState({ codigoAcceso: e.target.value });
        break;

      default:
        break;
    }
  };
  despertar(){
    axios
      .post('https://dojo-backend-api.herokuapp.com/Despertar')
      .then((res) => {
       
        
      })
      .catch((err) => {})
  };

  manejarSubmit = (e) => {
    e.preventDefault();
    const peti = {
      email: this.state.email,
      pregunta: this.state.pregunta,
      autorPregunta: this.state.autorPregunta,
      tema: this.state.tema,
    };
    const URL = "https://dojo-backend-api.herokuapp.com/CrearPregunta";
    axios
      .post(URL, peti)
      .then((res) => {
        alert(
          "Pregunta Creada Correctamente! ✔ Te enviaremos un correo con tus códigos de acceso 😉"
        );
        this.setState({ codigoPregunta: res.data.codigoPregunta });
        this.setState({ codigoAcceso: res.data.codigoAccesoPregunta });
        this.setState({ email: '' });
        this.setState({ pregunta: '' });
        this.setState({ autorPregunta: '' });
        this.setState({ tema: '' });
      })
      .catch((err) => alert("Error al registrar la pregunta 😢"));
  };

  render() {
    return (
      <React.Fragment>
        {this.despertar()}
        <div className="contenedorFila" style={{ backgroundColor: "#ebe1f2" }}>
          <div className="col p-0">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/CrearPregunta.jpg"
              width="100%"
              height="100%"
              alt="Dojo"
            ></img>
          </div>
          <div
            className="col"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px" }}
          >
            <div className="mt-4 mr-4 mb-4 ">
              <center>
                <h1 className="m-4">Crea una pregunta nueva</h1>
              </center>
              <form>
                <div className="form-group">
                  <div className="contenedorFila">
                    <div className="col mt-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        value={this.state.email}
                        onChange={this.cambiarInput}
                      />
                    </div>
                    <div className="col mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tema"
                        name="tema"
                        value={this.state.tema}
                        onChange={this.cambiarInput}
                      />
                    </div>
                  </div>
                </div>
            
                <div className="contenedorFila">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre del Autor"
                        name="autorPregunta"
                        value={this.state.autorPregunta}
                        onChange={this.cambiarInput}
                      />
                
                </div>
                </div>

                <div className="form-group contenedorFila1 mt-3">
                <div className="col mt-3">
                      <textarea
                        className="form-control"
                        rows="10"
                        placeholder="Escribe tu pregunta..."
                        name="pregunta"
                        value={this.state.pregunta}
                        onChange={this.cambiarInput}
                      ></textarea>
                    </div>
                  <div className=" mt-3">
                    <div className="col">
                      

                      <div className="contenedorFila m-4">
                        <div className="col">
                          <center>
                            <h3>Código Pregunta:</h3>
                          </center>
                        </div>
                      </div>

                      <div className="contenedorFila m-4">
                        <div className="col">
                          <center>
                            <h3>{this.state.codigoPregunta}</h3>
                          </center>
                        </div>
                      </div>

                      <div className="contenedorFila m-4">
                        <div className="col">
                          <center>
                            <h3>Código Secreto:</h3>
                          </center>
                        </div>
                      </div>

                      <div className="contedorFila m-4">
                        <div className="col">
                          <center>
                            <h3>{this.state.codigoAcceso}</h3>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div className="contenedorFila m-3">
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
                              Crear Nueva Pregunta
                            </button>
                          </center>
                        </div>
                      </div>
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
