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
			homeworld: ''
		};
		this.onClick = this.onClick.bind(this);
	}
	onClick(index) {
		// console.log('index', index);
		// console.log('this.state', this.state);
		let thisFilms = this.state.characters[index].films;
		const filmsList = [];
		
		let thisHomeworld = this.state.characters[index].homeworld;
		axios.get(thisHomeworld).then((res) => {
			console.log(res.data.name);
			this.setState({
				homeworld: res.data.name
			})
		});
			// this.setState({
			// 	characters.homeworld : res.data.name;
			// })
		
		// console.log('thisFilms', thisFilms);
		thisFilms.map((film) => axios.get(film).then((res) => {
			filmsList.push(res.data.title);
			this.setState({ 
				selected: index,
				filmsList: filmsList
			});
		}
		));
		// console.log('filmsList click',filmsList);
		// axios.get()
	}
	componentWillMount() {
		axios.get('https://swapi.co/api/people/').then((res) => {
			this.setState({ characters: res.data.results });			
		});
	}
	render() {
		let content;
		const { characters, selected, filmsList, homeworld } = this.state;
		console.log('homeworld', homeworld);
		// console.log('filmsList', filmsList);
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