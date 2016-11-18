import React from 'react';

const App = (props) =>
	<div className="content">
		<h1>React app</h1>
		{props.children}
	</div>

export default App;