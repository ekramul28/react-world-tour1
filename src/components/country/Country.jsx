import { useState } from 'react';
import './country.css'
const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;
    console.log(country)
    const [visited, setVisited] = useState(false);
    const handelVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{ color: visited ? 'purple' : 'black' }} >Name:{name?.common}</h2>
            <img src={flags?.png} alt="" />
            <p>population:{population}</p>
            <p>area:{area}</p>
            <p><small>Cord:{cca3}</small></p>
            <button onClick={handelVisited}>Visited</button>
            {visited ? 'I am Visited this country.' : 'I want to visite'}
        </div>
    );
};

export default Country;