import React, { Component } from 'react';
import Axios from 'axios';
//includes
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Header from './components/Header';
import Scenarios from './components/Scenarios';
import Indicators from './components/Indicators';
import Chart from './components/Chart';
//Assets
import './Assets/css/default.min.css';

class App extends Component {

  constructor(props)
  {
    super(props);

    // Tilaa ylläpidetään tässä app.js juurikomponentissa ja sitten välitetään tiedot propsien kautta lapsikomponenteille, kts. render metodi
    this.state = {
      regionLevels: [],
      regions: []  
    };

    this.selectRegionLevel = this.selectRegionLevel.bind(this);
  } 

  componentDidMount() {
    
  // Haetaan aluetason tiedot
  Axios.get('http://melatupa.azurewebsites.net/regionLevels')
    .then(response => { 
        console.log(response)    
        this.setState({ regionLevels: response.data });
        // Ensimmäisellä kerralla valitaan automaattisesti ensimmäinen aluetaso, jolle haetaan alue
        this.selectRegionLevel(response.data[0].id);
    });
  }

  selectRegionLevel(regionLevelId)
  {
    Axios.get('http://melatupa.azurewebsites.net/regionLevels/' + regionLevelId + '/regions')
    .then(response => {             
        this.setState({ regions: response.data });
    })
  }

  render() {

   /* let view;
      view = (<Chart regionlevels={ this.state.regionlevels }/>);*/

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <Header/>
            </div>
          </div>

          <div className="row">
                <Scenarios regionLevels={this.state.regionLevels}
                           regions={this.state.regions}
                           selectRegionLevel={this.selectRegionLevel} />
                <Indicators/>
                <Chart/>
          </div>
        </div>
    </div>
  
    );
  }
}

export default App;
