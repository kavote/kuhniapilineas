import React from 'react';

import './styles/LineaNew.css';
import header from '../images/logo-kuhni-strick-NEW.webp';
import Linea from '../components/Linea';
import LineaForm from '../components/LineaForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class LineaNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      id: '',
      linea: '',
      descrip: '',
      usuario: '',
      usufecha: '',
      usuhora: '',
      numero: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.lineas.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/lineas');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="LineaNew__hero">
          <img
            className="LineaNew__hero-image img-fluid"
            src={header}
            alt="Logo"
            width= "auto"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Linea
                id={this.state.form.id || 'ID'}
                linea={this.state.form.linea || 'LINEA'}
                descrip={this.state.form.descrip || 'DESCRIPCION'}
                usuario={this.state.form.usuario || 'USUARIO'}
                usufecha={this.state.form.usufecha || 'USUFECHA'}
                usuhora={this.state.form.usuhora || 'USUHORA'}
                numero={this.state.form.numero || 'NUMERO'}
              />
            </div>

            <div className="col-6">
              <h1>Nueva Linea</h1>
              <LineaForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LineaNew;
