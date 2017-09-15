import React, { Component } from 'react';
import axios from 'axios';

import Character from './character.js';

class CharacterList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters : 'loading',
			selected: '',
			filmsList: '',
			homeworld: '',
			species: '',
			vehiclesList: '',
			starshipsList: ''
		};
		this.onClick = this.onClick.bind(this);
	}
	onClick(index) {
		// console.log('index', index);
		// console.log('this.state', this.state);
				
		let thisHomeworld = this.state.characters[index].homeworld;
		axios.get(thisHomeworld).then((res) => {
			this.setState({
				homeworld: res.data.name
			})
		});

		let thisFilms = this.state.characters[index].films;
		const filmsList = [];
		thisFilms.map((film) => axios.get(film).then((res) => {
			filmsList.push(res.data.title);
			this.setState({ 
				selected: index,
				filmsList: filmsList
			});
		}
		));

		let thisSpecies = this.state.characters[index].species;
		axios.get(thisSpecies).then((res) => {
			this.setState({
				species: res.data.name
			})
		});		

		let thisVehicles = this.state.characters[index].vehicles;
		const vehiclesList = [];
		thisVehicles.map((vehicle) => axios.get(vehicle).then((res) => {
			vehiclesList.push(res.data.name);
			this.setState({ 
				vehiclesList: vehiclesList
			});
		}
		));

		let thisStarships = this.state.characters[index].starships;
		const starshipsList = [];
		thisStarships.map((starship) => axios.get(starship).then((res) => {
			starshipsList.push(res.data.name);
			this.setState({ 
				starshipsList: starshipsList
			});
		}
		));

	}
	componentWillMount() {
		axios.get('https://swapi.co/api/people/').then((res) => {
			this.setState({ characters: res.data.results });			
		});
	}
	render() {
		let content;
		const { characters, selected, filmsList, homeworld, species, vehiclesList, starshipsList } = this.state;
		console.log('vehiclesList', vehiclesList);
		if(characters === 'loading') {
			content = <div>loading...</div>
		} else if(characters){
			content = characters.map((character, index) => (
				<Character 
					key={index}
					data={character} 
					isOpen={(selected === index)}
					index={index}
					onClick={this.onClick}
					filmsList={filmsList}
					homeworld={homeworld}
					species={species}
					vehiclesList={vehiclesList}
					starshipsList={starshipsList}
				/>
			))
		}
		return ( 
			<div>
				<h2> This is where the character list will be</h2>
				{content}
			</div>
		);
	}
}

export default CharacterList;