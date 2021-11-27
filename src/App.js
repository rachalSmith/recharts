import './App.css';
import LineChartComponent from  './components/LineChartComponent';

import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    const url = 'https://swapi.dev/api/species'

    const fetchSpecies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        handleData(data);

      }
      catch(error) {
        console.log('error', error)
      }
    }
    fetchSpecies();

    const handleData = (data) => {
      let obj = {}

      let speciesName = data.results.map((species) => species.name);
      speciesName.splice(1, 1); // removes andriod name from data set
      let speciesHeight = data.results.map((species) => species.average_height);
      speciesHeight.splice(1, 1); // removes andriod height from data set

      let nameHeightCombined = speciesName.map(function(value, index) {

        obj.name = value
        obj.height = speciesHeight[index]
        //return value + ' ' + speciesHeight[index];
      });
      console.log(obj);
    }

  }, [])


  return (
    <div>
      <p>peep</p>
    </div>
  );
}

export default App;


//put this in setState if not working. Don't forget to change the names in linechartcomponenet
/* [
      {
        name: 'January',
        Iphone: 4000
      },
      {
        name: "March",
        Iphone: 1000,
      },
      {
        name: "May",
        Iphone: 4000,
      },
      {
        name: "July",
        Iphone: 800,
      },
      {
        name: "October",
        Iphone: 1500,
      },
    ]
  */

          /*
      let cryptoName = data.data.map((crypto) => crypto.name);
      let price = data.data.map((crypto) => crypto.priceUsd);
      let unixTimeStamp = Object.values(data);
      let date = new Date(unixTimeStamp[1]);
      console.log(date);
      */
      /*
      setLineChartData([
        {
          time: date,
          price: price
        }
      ])
      */

