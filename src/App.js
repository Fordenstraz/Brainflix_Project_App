//Assets/Styles
import './App.scss';
import { useState } from 'react';
import avatar from './assets/images/Mohan-muruge.jpg';
import JSONVideos from './data/videos.json';
import videoData from './data/video-details.json';
//Components
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

export default function App() {
	//Set state with default video:
	let [selectedVideo, setSelectedVideo] = useState(videoData[0]);
	//Set state for current user:
	let [user, setUser] = useState(avatar);

	return (
		<>
			<Header user={user} />

			<main>
				<VideoPlayer
					user={user}
					video={selectedVideo}
				/>
			</main>
		</>
	);
}
