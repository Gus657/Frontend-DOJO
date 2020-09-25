import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav class="navbar navbar-light bg-light d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img
            src="https://raw.githubusercontent.com/Gus657/Imagenes/master/dojo%20banner.png"
            width="150"
            height="50"
          ></img>
        </a>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-secondary">
            <Link to="/new-donation">Suscribers</Link>
          </button>
          <button type="button" className="btn btn-secondary">
            <Link to="/new-donation">Suscribers</Link>
          </button>
          <button type="button" className="btn btn-secondary">
          <Link to="/new-donation">Suscribers</Link>
          </button>
        </div>
        <div className="">
        <Link to="/new-donation">Suscribers</Link>
        </div>
      </nav>
      <div style={{ backgroundColor: '#DAB4F8', height:'20px' }}></div>
    </div>
  );
};

export default Navigation;
