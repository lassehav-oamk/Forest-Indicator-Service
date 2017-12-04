import React, { Component } from 'react';
//includes
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './components/Header';
import Scenarios from './components/Scenarios';
import Indicators from './components/Indicators';
//Assets
import './Assets/css/default.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-8">
          <Header/>
            <Scenarios/>
            <Indicators/>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;