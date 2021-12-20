import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import axios from 'axios';

const CenteredDiv = styled.div`
	margin: 15vh auto;
	width: 17vw;
	text-align: center;
`;

export default function Payment({ song, room, setPlaylist }) {
	const elements = useElements();
	const stripe = useStripe();

	const handleSubmit = async (e) => {
		console.log('paying');
		const response = await axios.post(
			'http://localhost:4242/create-payment-intent',
			{
				paymentMethodType: 'card',
				currency: 'eur',
				description: `${song} ${room}`,
			}
		);

		const { client_secret } = response.data.clientSecret;
		console.log(response);

		const { paymentIntent } = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		axios(`http://localhost:4242/spotify/playlist/${room}`).then((res) =>
			setPlaylist(res.data)
		);

		console.log(
			`payment intent: ${paymentIntent.id} status: ${paymentIntent.status}`
		);
	};

	return (
		<CenteredDiv>
			<h2>Checkout</h2>
			<CardElement />
			<button onClick={handleSubmit}>Pay</button>
		</CenteredDiv>
	);
}
