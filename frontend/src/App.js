import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import navegacion from './componentes/navigation';
import addAccesorio from './componentes/addAccesorio';
import accesorios from './componentes/accesorios';

function App() {
  return (
    <Router>
      <Route path="/" exact component= {navegacion}></Route>
      <Route path="/" exact component= {accesorios}></Route>
      <Route path="/addForm" exact component= {addAccesorio}></Route>
      </Router>
  )
}

export default App;
