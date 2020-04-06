import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LineaDetails.css';
import confLogo from '../images/logo-kuhni-strick-NEW.webp';
import Linea from '../components/Linea';
import DeleteLineaModal from '../components/DeleteLineaModal';

function LineaDetails(props) {
  const linea = props.linea;

  return (
    <div>
      <div className="LineaDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la API" width= "50%"/>
            </div>
            <div className="col-6 LineaDetails__hero-attendant-name">
              <h1>
                {linea._id} - {linea.linea}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Linea
              _id={linea._id}
              descrip={linea.descrip}
              linea={linea.linea}
              usuario={linea.usuario}
              usufecha={linea.usufecha}
              usuhora={linea.usuhora}
              numero={linea.numero}
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/lineas/${linea._id}/edit`}
                >
                  Editar
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Borrar
                </button>
                <DeleteLineaModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteLinea={props.onDeleteLinea}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineaDetails;
