import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import reportWebVitals from './reportWebVitals';
import { loadStripe } from '@stripe/stripe-js';

(async () => {
	const stripePromise = loadStripe(
		'pk_test_51JwGIBKsHH0F90ANSruBf5dj7VDzFcPBfeqpJmbjwP7IG8ouhWgYyCzpWsdZi38as51lGNIeNYzGsnB0LrUFukI200jyRZBfxb'
	);

	ReactDOM.render(
		<React.StrictMode>
			<Elements stripe={stripePromise}>
				<App />
			</Elements>
		</React.StrictMode>,
		document.getElementById('root')
	);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
