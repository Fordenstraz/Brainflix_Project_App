//Assets/Styles
import './App.scss';
import { useState } from 'react';
import avatar from './assets/images/Mohan-muruge.jpg';
import JSONVideos from './data/videos.json';
import videoData from './data/video-details.json';
//Components
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList/VideoList';

export default function App() {
	//Set state with default video:
	const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
	//Set state for current user:
	const [user, setUser] = useState(avatar);
	//Set state of video list:
	const [videos, setVideos] = useState(JSONVideos);

	return (
		<>
			<Header user={user} />

			<main>
				<VideoPlayer
					user={user}
					video={selectedVideo}
				/>

				<Comments
					user={user}
					video={selectedVideo}
				/>

				<VideoList listData={videos} />
			</main>
		</>
	);
}
