// src/App.js
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Countries from './components/Countries';
import Header from './components/Header';
import CountriesDetails from './components/CountriesDetails';

import { useEffect, useState} from 'react'

import axios from 'axios'
const apiURL = 'https://ih-countries-api.herokuapp.com/countries'


function App() {
  const [countries, setCountrie] = useState([])

  const [loading, setLoading] = useState(true)

  const getCountries = async() => {
    try {
        let response = await axios.get(apiURL)
        setCountrie(response.data)
        console.log(response.data)
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=> {
  getCountries()
}, [])

  

  return (
  <div className="App">
    <Header/>
    <Countries countries={countries} />
    
    <Routes>

    <Route path="/:id" element={ <CountriesDetails />} />

    </Routes>
   

    </div>
  )
}
export default App;
