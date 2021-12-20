import React, { useState } from 'react';
import axios from 'axios';

export default function AddSongInput(props) {
	// const [song, setSong] = useState('');

	const handleChange = (e) => {
		props.setSong(e.target.value);
		e.target.value = props.song;
	};

	const handleSubmit = async () => {
		// const response = await axios.post('http://localhost:4242/spotify/addsong', {
		// 	uri: song,
		// 	room: props.room,
		// });
		// props.setPlaylist(response.data);
		props.setPaymentInProgress(true);
	};

	return (
		<div>
			<input
				onChange={handleChange}
				id='add-song'
				type='text'
				value={props.song}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
