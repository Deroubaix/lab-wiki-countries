// src/App.js
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Countries from './components/Countries';
import Header from './components/Header';
import CountriesDetails from './components/CountriesDetails';

import {useState, useEffect} from 'react'

function App() {
  const [countries, setCountrie] = useState([])
  

  return (
  <div className="App">
    <Header/>
    <Countries countries={countries} />
    <Routes>
    
    <Route path="/countries/:id" element={ <CountriesDetails />} />
    </Routes>
    <Countries/>

    </div>
  )
}
export default App;
