import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [countries, SetCountries] = useState([]);
    const [visitedCountries, SetVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => SetCountries(data));
    }, [])
    const handelVisitedCountry = country => {
        console.log('add to the visited country');
        const newVisitedCountry = [...visitedCountries, country];
        SetVisitedCountries(newVisitedCountry);
    }
    return (
        <div >
            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>Visited Country:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3}
                        handelVisitedCountry={handelVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;