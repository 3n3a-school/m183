import { h } from 'preact';
import { Router } from 'preact-router';



import Header from './header';

// Code-splitting is automated for `routes` directory
import Login from '../routes/login';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Login path="/" />
		</Router>
	</div>
)

export default App;
