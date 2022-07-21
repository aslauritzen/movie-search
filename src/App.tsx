import React from 'react';
import './App.scss';
import SearchPage from './pages/searchPage/SearchPage';
import TitleBar from './components/titleBar/TitleBar';

function App() {
	return (
		<div className="App">
			<TitleBar />
			<SearchPage />
		</div>
	);
}

export default App;
