import axios from "axios"
import { Link, useParams} from "react-router-dom"
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
{   country &&   ( 
       <>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country"></img>

        <h2>{country.name.common}</h2>
        <h2>Capital: {country.capital}</h2>
        <h2>Area: {country.area}</h2>
        <h2>{country.area}</h2>
          
        <h2>Borders:</h2>
        {
          country.borders.map((border)=> {
            return (
              <Link to={`/${border}`}>
                <p>
                  {border}
                </p>
              </Link>
            );
          })}
          </>
          )}
       
    </div>
  );
}

export default CountriesDetails