import React from 'react';
import './App.css';


//pages
import Home from './pages/home';
import Entrar from './pages/login';
import Registro from './pages/registro';
import sobreNosotros from './pages/sobreNosotros';
import JobsInformation from './pages/jobsInformation';

//router
import {Route, BrowserRouter as Router, Switch} 
from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Entrar} />
          <Route path="/registro" exact component={Registro} />
          <Route path="/sobreNosotros" exact component={sobreNosotros} />
          <Route path="/jobsinformation" exact component={JobsInformation} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
