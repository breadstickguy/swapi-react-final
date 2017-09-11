import React from 'react';

const Films = (data) => (
			<div>
				I was in these films: {Object.keys( data.data ).map( key => { return <p key={data.data[key]}> { data.data[key] }</p>} )}
			</div>
			);

export default Films;