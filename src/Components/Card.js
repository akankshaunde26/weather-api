import React, { useState } from 'react';

function Card() {
    const api = {
        key : "9cc6658848af538bbc2f4aaa3b301f09",
        url : "https://api.openweathermap.org/data/2.5/", 
    }

    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState({});
    const [click,setClick] = useState(true);

    const search =(evt)=> {
        evt.preventDefault()
            fetch(`${api.url}weather?q=${query}&appid=${api.key}&units=metric`)
            .then(res=>res.json())
            .then(result => {
                setWeather(result);
                console.log(weather);
                setQuery('');
                console.log(result);
            }).then(() => setClick(false))

    }
    
    return (
        <div>
            {click ? 
                <div className="card">
                <div>
                   <h1>Weather Search</h1>
                   <h3>Know the weather with one click!</h3>
                </div>
                <i className="fas fa-cloud-sun-rain fa-7x card-icon"></i>
                <form className="input" onSubmit={search}>
                   <input type="text" name="city" placeholder="Search City" required onChange={(e)=>setQuery(e.target.value)} value={query} ></input>
                </form>
                </div>
                :
                <div className="card card-css">
                 <h1>Weather Search</h1>
                   <div className="card-info">
                   <h3>{Math.round(weather.main.temp)}°C | {weather.weather[0].main}</h3>
                   <i className="fas fa-cloud-meatball fa-7x"></i>
                    </div>
                   <h2><i className="fas fa-map-marker-alt"></i> {weather.name}, {weather.sys.country}</h2>
            </div>}
        </div>
    )
}

export default Card
