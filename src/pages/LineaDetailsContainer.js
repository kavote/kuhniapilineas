import React from 'react';

import LineaDetails from './LineaDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class LineaDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.lineas.read(this.props.match.params.lineaId);
      this.setState({ loading: false, data: data.result });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteLinea = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.lineas.remove(this.props.match.params.lineaId);
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

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <LineaDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteLinea={this.handleDeleteLinea}
        linea={this.state.data}
      />
    );
  }
}

export default LineaDetailsContainer;
