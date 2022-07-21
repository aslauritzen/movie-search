import './ErrorNotification.scss';
import React from 'react';

interface ErrorNotificationProps {
	errorMessage: string;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = (props) => {
	return (
		<div className={'errorNotification'}>
			<h2>An error occurred</h2>
			<h4>{props.errorMessage}</h4>
		</div>
	);
};

export default ErrorNotification;
