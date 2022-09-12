import { h } from 'preact';
import { Router } from 'preact-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/m183/exercises/a03' });


import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Login from '../routes/login';

const App = () => (
	<div id="app">
		<Header />
		<Router history={history}>
			<Home path="/" />
			<Login path="/login" />
		</Router>
	</div>
)

export default App;
