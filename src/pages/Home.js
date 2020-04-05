import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import kuhniLogoImage from '../images/logo-kuhni-strick-NEW.webp';
import machineImage from '../images/machine.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={kuhniLogoImage}
                alt="kuhni Labs Logo"
                className="img-fluid mb-2"
              />

              <h1>Sistema de Administración de Lineas</h1>
              <Link className="btn btn-primary" to="/lineas">
                Iniciar
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={machineImage}
                alt="machine"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
