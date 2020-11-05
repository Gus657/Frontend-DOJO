import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Navigation.css";


const Navigation = (props) => {
  function despertar(){
    axios
      .post('https://dojo-backend-api.herokuapp.com/Despertar')
      .then((res) => {
        alert(
          "Ok"
        );
        
      })
      .catch((err) => alert("Not Ok"))
  }
  return (
    <div>
      <div className="contenedorFila mt-3 mb-3 ">
        <div className="col espaciado">
          <a className="" href="/">
            <img
              src="https://raw.githubusercontent.com/Gus657/Imagenes/master/dojo%20banner.png"
              width="150"
              height="50"
              alt="Dojo"
            ></img>
           {despertar()}
          </a>
        </div>

        <div className="col espaciado ">
          <div className="btn-group borde" role="group">
            <button type="button" className="menuButton">
              <Link to="/Crear" className="menuText">
                Crear
              </Link>
            </button>
            <button type="button" className="menuButton">
              <Link to="/Responder" className="menuText">
                Responder
              </Link>
            </button>
            <button type="button" className="menuButton">
              <Link to="/Resultados" className="menuText">
                Resultados
              </Link>
            </button>
          </div>
        </div>
        <div className="col aboutText espaciadoAbout">
          <Link to="/AcercaDeDojo">Acerca de Dojo</Link>
        </div>
      </div>


      <div
        style={{ backgroundColor: "#DAB4F8", height: "20px", width: "100%" }}
      ></div>
    </div>
  );
};

export default Navigation;
