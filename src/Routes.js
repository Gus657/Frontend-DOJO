import React from 'react';
import { Route } from 'react-router-dom';
import CrearPregunta from './components/CrearPregunta';
import Responder from './components/Responder';
import LandPageDojo from './components/LandPageDojo';
import Resultados from './components/Resultados';
import AcercaDe from './components/AcercaDeDojo';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/Resultados" component={ Resultados } ></Route>
      <Route exact path="/Responder" component={ Responder} ></Route>
      <Route exact path="/Crear" component={ CrearPregunta} ></Route>
      <Route exact path="/" component={LandPageDojo} ></Route>
      <Route exact path="/AcercaDeDojo" component={AcercaDe} ></Route>
  </React.Fragment>
];