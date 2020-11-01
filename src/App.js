import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import routes from "./Routes";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container-fluid p-0">
        <Switch>{routes}</Switch>
      </div>
     <div style={{ backgroundColor: '#ebe1f2', "paddingTop":'180px'}}>
     <footer >
        <div className=" text-light text-center py-3 "style={{ backgroundColor: '#3f066c'}}>
          2020 - 
          <a href="http://dojoproject.netlify.app/">Ayuda</a>
        </div>
      </footer>
     </div>
    </Router>
  );
}

export default App;
