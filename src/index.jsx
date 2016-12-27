import React from 'react';
import {render} from 'react-dom';
import {Router , Route , hashHistory} from 'react-router';
import HomePage from './pages/Home.jsx';
import PrizedPage from './pages/Prized.jsx';
import SettingPage from './pages/Setting.jsx';

render(
	<Router history={hashHistory}>
		<Route path="/" component={HomePage}/>
		<Route path="/prized" component={PrizedPage}/>
		<Route path="/setting" component={SettingPage}/>
	</Router>,
	document.getElementById('main-container')
);






