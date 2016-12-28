import React from 'react';
import {render} from 'react-dom';
import {Router , Route , hashHistory} from 'react-router';
import HomePage from './pages/Home.jsx';
import PrizedPage from './pages/Prized.jsx';
import SettingPage from './pages/Setting.jsx';
import HistoryPage from './pages/History.jsx';
import PrizingPage from './pages/Prizing.jsx';

render(
	<Router history={hashHistory}>
		<Route path="/" component={HomePage}/>
		<Route path="/prized" component={PrizedPage}/>
		<Route path="/prizing" component={PrizingPage}/>
		<Route path="/setting" component={SettingPage}/>
		<Router path="/history" component={HistoryPage}/>
	</Router>,
	document.getElementById('main-container')
);






