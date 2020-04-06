import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import kuhniLogoImage from '../images/logo-kuhni-strick-NEW.webp';
import machineImage from '../images/machine.png';

import Loader from '../components/Loader';

export default class Home extends Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {  
      results: [],
    },
  };
  
  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try{
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(
            this.state.data.results, data.results
          ),
        },
        nextPage: this.state.nextPage + 1,
      });
    }catch( error ){
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  render() {

    if(this.state.error){
      return `Error: ${this.state.error.message}`;
    }

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

            <ul>
              {this.state.data.results.map(character =>(
                <li className="col-6 col.md3" key={character.id}>
                  {character.name}
                </li>
              ))}
            </ul>

            {this.state.loading && (
              <div className="loader"> 
                <Loader />
              </div>
            )}

            {!this.state.loading && (
              <button onClick={() => this.fetchCharacters()}>Load More</button>
            )}

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
