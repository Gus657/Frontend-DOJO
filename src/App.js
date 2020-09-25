import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import routes from "./Routes";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="">
        <Switch>{routes}</Switch>
      </div>
     <div style={{ backgroundColor: '#ebe1f2', "padding-top":'180px'}}>
     <footer >
        <div class="text-light text-center py-3 "style={{ backgroundColor: '#3f066c'}}>
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
     </div>
    </Router>
  );
}

export default App;
