import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Login from '../routes/login';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Login path="login" />
		</Router>
	</div>
)

export default App;
