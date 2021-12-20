import { useState } from 'react';
import axios from 'axios';
import Playlist from './components/Playlist/Playlist';
import Payment from './components/Payment';

function App() {
	const [id, setId] = useState('');
	const [activeRoom, setActiveRoom] = useState();
	const [playlist, setPlaylist] = useState();
	const [paymentInProgress, setPaymentInProgress] = useState(false);
	const [song, setSong] = useState('');

	const handleChange = (e) => {
		setId(e.target.value);
	};

	const handleSubmit = async () => {
		console.log('submitting');

		const response = await axios.post('http://localhost:4242/aux/joinroom', {
			id,
		});

		console.log(response);

		setActiveRoom(response.data.id);
		setPlaylist(response.data.playlist);
	};

	return (
		<div className='App'>
			{!activeRoom && (
				<>
					<p>Enter a room code</p>
					<input value={id} onChange={handleChange}></input>
					<button onClick={handleSubmit}>Join room!</button>
				</>
			)}

			{paymentInProgress && (
				<Payment setPlaylist={setPlaylist} song={song} room={activeRoom} />
			)}

			{activeRoom && playlist && (
				<Playlist
					song={song}
					setSong={setSong}
					room={activeRoom}
					setPaymentInProgress={setPaymentInProgress}
					setPlaylist={setPlaylist}
					playlist={playlist.tracks.items}
				/>
			)}
		</div>
	);
}

export default App;
