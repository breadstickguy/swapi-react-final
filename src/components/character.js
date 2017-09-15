import React from 'react';
import Films from './films.js';
import Planets from './planets.js';
import Species from './species.js';
import Vehicles from './vehicles.js';
import Starships from './starships.js';


const Character = ({ data, onClick, isOpen, index, filmsList, homeworld, species, vehiclesList, starshipsList}) => (
	<div className="character_container">
		<h2>My name is {data.name}</h2>
		<button onClick={() => onClick(index)}>Click here for my details!</button>
		{isOpen && <div>
		<div>I was born: {data.birth_year}</div>
		<div>My eyes are: {data.eye_color}</div>
		<div>I am a : {data.gender}</div>
		<div>My hair is: {data.hair_color}</div>
		<div>I am {data.height} cm tall!</div>
		<div>I weigh {data.mass}kg!</div>
		<div>My skin is: {data.skin_color}</div>
		<Films data={filmsList} />
		<Planets data={homeworld} />
		<Species data={species} />
		<Starships data={starshipsList} /> 
		<Vehicles data={vehiclesList} />
		</div> }
	</div>
);

export default Character;
