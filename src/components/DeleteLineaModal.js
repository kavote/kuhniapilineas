import React from 'react';

import Modal from './Modal';

function DeleteLineaModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteLineaModal">
        <h1>¿Estás seguro?</h1>
        <p>Estás apunto de borrar una linea.</p>

        <div>
          <button onClick={props.onDeleteLinea} className="btn btn-danger mr-4">
            Borrar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteLineaModal;
