import axios from 'axios'

import React from 'react'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const apiURL = 'https://ih-countries-api.herokuapp.com/countries'



function Countries() {

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
    <div>
        <h3>Countries List</h3>
        
        {loading && <h4>Loading...</h4>}
          
        {countries.map(country => {
            return (
                <div  key={country.alpha3Code}> <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}> 
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
            <p>{country.name.common}</p> </Link>
            </div>
            )
            
            
        })}
    </div>
  )
}

export default Countries