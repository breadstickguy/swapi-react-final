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
		{isOpen && <div>I am open!</div>}
		{/* {Object.keys(this.props.data).map((key) => { return <p>{key}: {this.props.data[key]}</p>})} 
		<Films data={this.props.data.films} />
		<Planets data={this.props.data.homeworld} />
		<Species data={this.props.data.species} />
		<Vehicles data={this.props.data.vehicles} />
		<Starships data={this.props.data.starships} /> */}
	</div>
);
export default Character;
