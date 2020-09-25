import React from 'react';
import { Route } from 'react-router-dom';
import Donations from './components/Donations';
import CrearPregunta from './components/CrearPregunta';
import Responder from './components/Responder';
import LandPageDojo from './components/LandPageDojo';
import Resultados from './components/Resultados';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/Resultados" component={ Resultados } ></Route>
      <Route exact path="/Responder" component={ Responder} ></Route>
      <Route exact path="/Crear" component={ CrearPregunta} ></Route>
      <Route exact path="/" component={LandPageDojo} ></Route>
  </React.Fragment>
];