import axios from "axios"
import { useParams} from "react-router-dom"
import {useState, useEffect} from 'react'

function CountriesDetails({countries}) {
    const {id} = useParams()
    const [country, setCountry] = useState(null)

    const getCountry = async () => {
         try {
           const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`);
           setCountry(response.data);
         } catch (error) {
           console.log(error);
         }
       };

       useEffect(() => {
         getCountry()
        }, [id]);

  return (
    <div>
        <h2><img src={`https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`} alt="country"></img>
        {country.name.common}</h2>
    </div>
  )
}

export default CountriesDetails