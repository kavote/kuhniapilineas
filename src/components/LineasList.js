import React from 'react';
import { Link } from 'react-router-dom';

import './styles/LineasList.css';

class LineasListItem extends React.Component {
  render() {
    return (
      <div className="LineasListItem">
        <div>
          <strong>
          {this.props.linea.id} - {this.props.linea.linea}
          </strong>
          <br />{this.props.linea.descrip}
          <br />
          {this.props.linea.usuario}
          <br />
          {this.props.linea.usufecha} {this.props.linea.usuhora} 
        </div>
      </div>
    );
  }
}

function useSearchLineas(lineas) {
  const [query, setQuery] = React.useState('');
  const [filteredLineas, setFilteredLineas] = React.useState(lineas);

  React.useMemo(() => {
    const result = lineas.filter(linea => {
      return `${linea.linea} ${linea.descrip}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredLineas(result);
  }, [lineas, query]);

  return { query, setQuery, filteredLineas };
}

function LineasList(props) {
  const lineas = props.lineas;

  const { query, setQuery, filteredLineas } = useSearchLineas(lineas);

  if (filteredLineas.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filtrar Lineas</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>Lineas no encontradas</h3>
        <Link className="btn btn-primary" to="/lineas/new">
          Crear nueva linea
        </Link>
      </div>
    );
  }

  return (
    <div className="LineasList">
      <div className="form-group">
        <label>Filtrar Lineas</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredLineas.map(linea => {
          return (
            <li key={linea.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/lineas/${linea.id}`}
              >
                <LineasListItem linea={linea} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LineasList;
