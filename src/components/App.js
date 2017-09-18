import React, { Component } from 'react';
import EarthquakeList from './EarthquakeList'
import EarthquakeInfo from './EarthquakeInfo'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <main>

          <div className="title">
            <div className="my-header">
              Earthquakes!
            </div>
          </div>

          <EarthquakeInfo/>

      <EarthquakeList/>
    </main>
    )
  }
}



export default App;
