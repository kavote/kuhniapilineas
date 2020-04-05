import React from 'react';

class LineaForm extends React.Component {
  handleClick = e => {
    console.log('El botón fue clickeado');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
            <label>Id</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="id"
              value={this.props.formValues.id}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>Linea</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="linea"
              value={this.props.formValues.linea}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="descrip"
              value={this.props.formValues.descrip}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>Usuario</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="usuario"
              value={this.props.formValues.usuario}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>Fecha</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="date"
              name="usufecha"
              value={this.props.formValues.usufecha}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>Hora</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="time"
              name="usuhora"
              value={this.props.formValues.usuhora}
              required="required"
            />
          </div>

          <div className="form-group">
            <label>Número</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="numero"
              value={this.props.formValues.numero}
              required="required"
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default LineaForm;
