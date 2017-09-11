import React from 'react';

const Vehicles = (data) => (
			<div>
				I like to drive: {Object.keys( data.data ).map( key => { return <p key={data.data[key]}> { data.data[key] }</p>} )}
			</div>
			);

export default Vehicles;