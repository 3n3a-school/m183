import { h } from 'preact';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Login from '../routes/login';

const App = () => (
	<div id="app">
		<Header />
		<Login path="/" />
	</div>
)

export default App;
