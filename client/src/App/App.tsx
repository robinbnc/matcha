import React from 'react';
import logo from '../Assets/Images/logo.svg';
import Badge from 'react-bootstrap/Badge';

import './App.css';
import Button from 'react-bootstrap/Button';
import SwipeCard from './Common/swipeCard';

function App() {
  return (
	<div className="App">
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
		Edit <code>src/App.tsx</code> and save to reload.
		</p>
		<SwipeCard/>
		<a
		className="App-link"
		href="https://reactjs.org"
		target="_blank"
		rel="noopener noreferrer"
		>
		Learn React
		</a>
	</header>
	</div>
  );
}




export default App;
