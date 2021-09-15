import React from 'react';
import './index.css'
import { Switch, Route } from 'react-router-dom'

//pages
import HomePage from './pages/homepage/HomePage';
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";



const App = () => {
    return (
			<div className="App">
			<Switch>
				<Route exact path="/" render={() => (
					<HomePage />
				)} />
				<Route exact path="/register" render={() => (
					<Signup />
				)} />
				<Route exact path="/login" render={() => (
					<Login />
				)} />
			</Switch>
			</div>
		);
}

export default App
