import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cronograma from './components/Cronograma';
import Cursos from './components/Cursos';
import Estudiantes from './components/Estudiantes';
import Instructores from './components/Instructores';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav nav-pills flex-column flex-sm-row pt-3">
          <Link to="/cursos" className="mx-5 flex-sm-fill text-sm-center nav-link active">Cursos</Link>
          <Link to="/cronograma" className="mx-5 flex-sm-fill text-sm-center nav-link active">Cronograma</Link>
          <Link to="/estudiantes" className="mx-5 flex-sm-fill text-sm-center nav-link active">Estudiantes</Link>
          <Link to="/instructores" className="mx-5 flex-sm-fill text-sm-center nav-link active">Instructores</Link>
        </nav>
        <Switch>
          <Route path="/cronograma">
            <Cronograma />
          </Route>
          <Route path="/cursos">
            <Cursos />
          </Route>
          <Route path="/estudiantes">
            <Estudiantes />
          </Route>
          <Route path="/instructores">
            <Instructores />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
