import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Lineas.css';
import confLogo from '../images/logo-kuhni-strick-NEW.webp';
import LineasList from '../components/LineasList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';

class Lineas extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.lineas.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Lineas">
          <div className="Lineas__hero">
            <div className="Lineas__container">
              <img
                className="Lineas_conf-logo"
                src={confLogo}
                alt="Conf Logo"
                width= "50%"
              />
            </div>
          </div>
        </div>

        <div className="Lineas__container">
          <div className="Lineas__buttons">
            <Link to="/lineas/new" className="btn btn-primary">
              Nueva Linea
            </Link>
          </div>

          <LineasList lineas={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Lineas;
