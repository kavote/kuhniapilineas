import React from 'react';

import './styles/Linea.css';
import confLogo from '../images/logo-kuhni-strick-NEW.webp';

class Linea extends React.Component {
  render() {
    return (
      <div className="Linea">
        <div className="Linea__header">
          <img src={confLogo} alt="Logo de la API" width="50%"/>
        </div>

        <div className="Linea__section-name">
          <h1>
            # {this.props.id} - {this.props.linea} <br /><br />
            {this.props.descrip} <br /> {this.props.usuario}
          </h1>
        </div>

        <div className="Linea__section-info">
          <h3>{this.props.usufecha}</h3>
          <div>{this.props.usuhora}</div>
        </div>

        <div className="Linea__footer">#kuhniLabs</div>
      </div>
    );
  }
}

export default Linea;
