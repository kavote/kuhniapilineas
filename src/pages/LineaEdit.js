import React from 'react';

import './styles/LineaEdit.css';
import header from '../images/logo-kuhni-strick-NEW.webp';
import Linea from '../components/Linea';
import LineaForm from '../components/LineaForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class LineaEdit extends React.Component {
  state = {
    loading: true,
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.lineas.read(this.props.match.params.lineaId);

      this.setState({ loading: false, form: data.result });
      console.log(this.state.form);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.lineas.update(this.props.match.params.lineaId, this.state.form);
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
        <div className="LineasEdit__hero">
          <img
            className="LineaEdit__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Linea
                id={this.state.form._id || 'ID'}
                linea={this.state.form.linea || 'LINEA'}
                descrip={this.state.form.descrip || 'DESCRIPCION'}
                usuario={this.state.form.usuario || 'USUARIO'}
                usufecha={this.state.form.usufecha || 'USUFECHA'}
                usuhora={this.state.form.usuhora || 'USUHORA'}
                numero={this.state.form.numero || 'NUMERO'}
              />
            </div>

            <div className="col-6">
              <h1>Editar Linea</h1>
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

export default LineaEdit;
