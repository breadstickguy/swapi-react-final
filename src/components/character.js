import React, { Component } from 'react';
import axios from 'axios';


class Character extends Component {

	constructor(props) {
		super(props);
		this.state = {
			characters : []
		};
	}

	componentDidMount() {
		const charList = [];

		const getResults = (req) => {
			axios.get(req).then((res) => {
				// console.log('res',res.data.results);
				// console.log(charList);
				if (res.data.next) {
					console.log(res.data.next);
					getResults(res.data.next);
				}
				charList.push(...res.data.results);
				
				const characters = charList.map((obj => <div key={obj.name.toString()}>{obj.name}</div>));
				this.setState({ characters });
				console.log(res.data.results);
			});
				return charList;
		}
			// console.log('final charList', charList);
		getResults('https://swapi.co/api/people/');

		// axios.get('https://swapi.co/api/people/').then((result) => {
		// 	if(result.data.next) {
		// 		console.log(result.data.next);
		// 		axios.get(result.data.next).then((nextResult) => {
		// 			console.log('getting next page');
		// 			console.log(nextResult);
		// 		});
		// 	}

		// console.log('this is our final charList', charList);

		//  	const characters = result.data.results.map((obj => <div key={obj.name.toString()}>{obj.name}</div>));
		//  	console.log(characters);
		//  	this.setState({ characters });

		// });
	}

	render() {
		return ( 
			<div>
				<h2> This is where the character list will be</h2>
				{ this.state.characters }
			</div>
		);
	}
}

export default Character;