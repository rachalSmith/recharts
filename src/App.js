import './App.css';
import BarChartComponent from './components/barChartComponent/BarChartComponent';
import LineChartComponent from './components/lineChartComponent/LineChartComponent';
import Header from './components/header/Header';

import { useState, useEffect } from 'react';


function App() {

  useEffect(() => {
    fetchSpecies();
    fetchPlanets();
   }, [])


  const [barData, setBarData] = useState({});
  const [lineData, setLineData] = useState({});


  const speciesURL = 'https://swapi.dev/api/species';
  const planetsURL = 'https://swapi.dev/api/planets';


//  Returns a raw array of data from API
  const fetchSpecies = async () => {
    try {
      const response = await fetch(speciesURL);
      const data = await response.json();
      const { results } = data;

      console.log(results)

      parsedSpeciesData(results);
    }
    catch(error) {
      console.log('error', error);
    }
  }


//  Returns a raw array of data from API
  const fetchPlanets = async () => {
    try {
      const response = await fetch(planetsURL);
      const data = await response.json();

      const { results } = data;

      parsedPlanetData(results);
    }
    catch(error) {
      console.log('error', error);
    }
  }


//  Returns parsed data for species and sets data as state.
  const parsedSpeciesData = (results) => {

    const cleanData = results.map(species => {
      return {
        name: species.name,
        averageHeight: Number(species.average_height)
      };
    }).filter(species => !isNaN(species.averageHeight));
    cleanData.splice(5, 4);

    setBarData(cleanData);
  }


//  Returns parsed data for species and sets data as state.
  const parsedPlanetData = (results) => {

    const cleanData = results.map(planets => {
      return {
        name: planets.name,
        diameter: (planets.diameter) / 1000,
        day: planets.rotation_period,
      };
    }).filter(planets => planets.diameter <= 100);

    setLineData(cleanData);
  }


  return (
    <div className="container">
      <Header />
      <BarChartComponent barChartData={barData}/>
      <LineChartComponent lineChartData={lineData}/>
    </div>
  );
}

export default App;


