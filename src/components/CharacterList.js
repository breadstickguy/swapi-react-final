import React, { Component } from 'react';
import axios from 'axios';

import Character from './character.js';
// import { getResults } from '../Actions.js';

class CharacterList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters : 'loading',
			selected: ''
		};
		this.onClick = this.onClick.bind(this);
	}
	onClick(index) {
		this.setState({ selected: index })
	}
	componentWillMount() {
		// const newState = this.state;
		axios.get('https://swapi.co/api/people/').then((res) => {
			this.setState({ characters: res.data.results });			
		});
	}
	render() {
		let content;
		const { characters, selected } = this.state;
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