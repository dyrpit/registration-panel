import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import UserProvider from './context/user-context';
import Footer from './Footer/Footer';

function App() {
	return (
		<UserProvider>
			<Router>
				<Nav />
				<Route exact path='/' component={Home} />
				<Route path='/login' component={LoginPage} />
				<Route path='/profile' component={Profile} />
			</Router>
			<Footer />
		</UserProvider>
	);
}

export default App;
