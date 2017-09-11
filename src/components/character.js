import React from 'react';
import Films from './films.js';
import Planets from './planets.js';
import Species from './species.js';
import Vehicles from './vehicles.js';
import Starships from './starships.js';


const Character = ({ data, onClick, isOpen, index}) => (
	<div className="character_container">
		<h2>My name is {data.name}</h2>
		<button onClick={() => onClick(index)}>Click here for my details!</button>
		{isOpen && <div>
		<p>I was born: {data.birth_year}</p>
		<p>My eyes are: {data.eye_color}</p>
		<p>I am a : {data.gender}</p>
		<p>My hair is: {data.hair_color}</p>
		<p>I am {data.height} units tall!</p>
		<p>I have {data.mass} units of mass!</p>
		<p>My skin is: {data.skin_color}</p>
		<Films data={data.films} />
		<Planets data={data.homeworld} />
		<Species data={data.species} />
		<Vehicles data={data.vehicles} />
		<Starships data={data.starships} /> 
		</div> }
	</div>
);
export default Character;
