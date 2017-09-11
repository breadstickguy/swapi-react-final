import React from 'react';

const Starships = (data) => (
			<div>
				I fly these ships: {Object.keys( data.data ).map( key =>  <p key={data.data[key]}> { data.data[key] }</p> )}
			</div>
			);

export default Starships;