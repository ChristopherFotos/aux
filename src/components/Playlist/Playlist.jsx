import React from 'react';
import styled from 'styled-components';
import AddSongInput from '../AddSongInput';
import uniqid from 'uniqid';

const CenteredDiv = styled.div`
	margin: 15vh auto;
	width: 30vw;
	text-align: center;
`;

export default function Playlist(props) {
	const { playlist } = props;

	return (
		<CenteredDiv>
			<AddSongInput
				setSong={props.setSong}
				song={props.song}
				setPaymentInProgress={props.setPaymentInProgress}
				room={props.room}
				setPlaylist={props.setPlaylist}
			/>
			{playlist.map((song) => (
				<div key={uniqid()}>
					<h3>{song.track.name}</h3>
				</div>
			))}
		</CenteredDiv>
	);
}
