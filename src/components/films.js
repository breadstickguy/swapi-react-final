import React from 'react';

const Films = (data) => (
			<div>
				I was in these films: {Object.keys( data.data ).map( key => { return <p> { this.props.data[key] }</p>} )}
			</div>
			);

export default Films;