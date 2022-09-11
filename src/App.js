import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import IndividualPeople from './components/individualPeople';
import IndividualStarships from './components/individualStarships';
import IndividualPlanets from './components/individualPlanets';
import IndividualVehicles from './components/individualVehicles';
import IndividualFilms from './components/individualFilms';

function App() {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchPeople() {
        let res = await fetch('https://swapi.dev/api/people/');
        let data = await res.json();
        setPeople(data.results);
        setLoading(false);
      }

      async function fetchPlanets() {
        let res = await fetch('https://swapi.dev/api/planets/');
        let data = await res.json();
        setPlanets(data.results);
        setLoading(false);
      }

      async function fetchFilms() {
        let res = await fetch('https://swapi.dev/api/films/');
        let data = await res.json();
        setFilms(data.results);
        setLoading(false);
      }

      async function fetchVehicles() {
        let res = await fetch('https://swapi.dev/api/vehicles/');
        let data = await res.json();
        setVehicles(data.results);
        setLoading(false);
      }

      async function fetchStarships() {
        let res = await fetch('https://swapi.dev/api/starships/');
        let data = await res.json();
        setStarships(data.results);
        setLoading(false);
      }

      fetchPeople();
      fetchPlanets();
      fetchFilms();
      fetchVehicles();
      fetchStarships();

    }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          { loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
          ) : (
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/people' element={<People data={people}/>} />
              <Route path='/people/:id' element={<IndividualPeople />} />
              <Route exact path='/planets' element={<Planets data={planets}/>} />
              <Route path='/planets/:id' element={<IndividualPlanets />} />
              <Route exact path='/films' element={<Films data={films}/>} />
              <Route path='/films/:id' element={<IndividualFilms />} />
              <Route exact path='/vehicles' element={<Vehicles data={vehicles}/>} />
              <Route path='/vehicles/:id' element={<IndividualVehicles />} />
              <Route exact path='/starships' element={<Starships data={starships}/>} />
              <Route path='/starships/:id' element={<IndividualStarships />} />
            </Routes>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;