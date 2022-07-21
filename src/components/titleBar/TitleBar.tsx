import './TitleBar.scss';
import React from 'react';

interface TitleBarProps {}

const TitleBar: React.FC<TitleBarProps> = () => {
	return (
		<div className={'titleBar'}>
			<h1>Movie Search</h1>
		</div>
	);
};

export default TitleBar;
