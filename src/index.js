import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
	<HttpsRedirect>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</HttpsRedirect>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
