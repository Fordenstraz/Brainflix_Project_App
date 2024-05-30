//Assets/Styles
import './App.scss';
import { useState } from 'react';
import avatar from './assets/images/Mohan-muruge.jpg';
import JSONVideos from './data/videos.json';
import videoData from './data/video-details.json';
import commentIcon from './assets/images/icons/add_comment.svg';
//Components
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

export default function App() {
	//Set state with default video:
	let [selectedVideo, setSelectedVideo] = useState(videoData[0]);

	return (
		<>
			<Header userImage={avatar} />

			<VideoPlayer video={selectedVideo} />
		</>
	);
}
