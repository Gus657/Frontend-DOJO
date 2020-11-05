import React, { Component } from "react";
import axios from "axios";
import "../css/respuesta.css";
class CrearPreguntas extends Component {
  state = {
    codigoAccesoPregunta: "",
    positivo: 0.00,
    negativo: 0.00,
    neutro: 0.00,
    cantidad: 0,
    codigoPregunta: "",
    estado:"noVisible"
  };

  cambiarInput = (e) => {
    switch (e.target.name) {
      case "codigoPregunta":
        this.setState({ codigoPregunta: e.target.value });
        break;
        case "codigoAccesoPregunta":
        this.setState({ codigoAccesoPregunta: e.target.value });
        break;
      default:
        break;
    }
  };


  manejarBusqueda = (e) => {
    e.preventDefault();
    const jsonBuscar = {
      codigoPregunta: this.state.codigoPregunta,
      codigoAccesoPregunta: this.state.codigoAccesoPregunta
    };
    const URLBuscar = "https://dojo-backend-api.herokuapp.com/ObtenerRespuesta";
    axios
      .post(URLBuscar, jsonBuscar)
      .then((res) => {
        if (res.data==null){
          alert("Los códigos utilizados no son correctos 😢" ) 
        }else{
          this.setState({ positivo: res.data.positivo });
          this.setState({ negativo: res.data.negativo });
          this.setState({ neutro: res.data.neutro });
          this.setState({ cantidad: res.data.cantidad });
          this.setState({ estado: "visible"});
        }
      })
      .catch((err) => alert("Error al buscar la pregunta 😢"));
  };
  despertar(){
    axios
      .post('https://dojo-backend-api.herokuapp.com/Despertar')
      .then((res) => {
        
        
      })
      .catch((err) => {})
  };
  render() {
    return (
      <React.Fragment>
        {this.despertar()}
        <div className="contenedorFila">
          <div className="col p-0">
            <img
             src="https://raw.githubusercontent.com/Gus657/Imagenes/master/Resultado.jpg"
              width="100%"
              height="100%"
              alt="Dojo"
            ></img>
          </div>
          <div className="col">
            <div className="mt-4 mr-4 mb-4 ">
              <center>
                <h1 className="m-4">Resultados</h1>
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
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Código Secreto"
                        name="codigoAccesoPregunta"
                        value={this.state.codigoAccesoPregunta}
                        onChange={this.cambiarInput}
                      />
                    </div>
                  </div>

                  <div className="mt-3">
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

                <div className={this.state.estado}>
                  <div className="col">
                    <center>
                      <h4 className="text-justify mt-4">
                        Tienes {this.state.cantidad} respuestas registradas hasta el momento.
                      </h4>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col">
                    <center>
                      <h2 className="text-center positivo mt-4">
                        Positivo
                      </h2>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col">
                    <center>
                      <h2 className="text-center positivo">
                        {this.state.positivo +"%"} 
                      </h2>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col">
                    <center>
                      <h2 className="text-center neutro mt-4">
                        Neutro
                      </h2>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col ">
                    <center>
                      <h2 className="text-center neutro">
                        {this.state.neutro +"%"} 
                      </h2>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col">
                    <center>
                      <h2 className="text-center negativo mt-4">
                        Negativo
                      </h2>
                    </center>
                  </div>
                </div>

                <div className={this.state.estado}>
                  <div className="col ">
                    <center>
                      <h2 className="text-center negativo">
                        {this.state.negativo +"%"} 
                      </h2>
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
