import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Lineas from '../pages/Lineas';
import LineaNew from '../pages/LineaNew';
import LineaDetails from '../pages/LineaDetailsContainer';
import LineaEdit from '../pages/LineaEdit';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lineas" component={Lineas} />
          <Route exact path="/lineas/new" component={LineaNew} />
          <Route exact path="/lineas/:lineaId" component={LineaDetails} />
          <Route exact path="/lineas/:lineaId/edit" component={LineaEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
