import React from 'react';

const Vehicles = (data) => 
{ console.log('data', data);
(
			<div>
				I like to drive: <ul>{data.data.map((vehicle) => <li key={vehicle}> {vehicle} </li>)} </ul>
			</div>
			);
}
export default Vehicles;