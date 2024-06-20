import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//Assets/Styles
import './App.scss';
import avatar from './assets/images/Mohan-muruge.jpg';
import JSONVideoList from './data/videos.json';
import JSONVideoData from './data/video-details.json';
//Pages
import Home from './pages/Home/Home';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
//Utilities
import scrollToTop from './utils/scrollToTop';

export default function App() {
	//Set state for current user:
	const [user, setUser] = useState(avatar);
	//Set state with default video:
	const [selectedVideo, setSelectedVideo] = useState(JSONVideoData[0]);
	//Set state of video list:
	const [asideVideos, setAsideVideos] = useState(JSONVideoList);

	//Set the selected video state:
	const selectNewVideo = target => {
		setSelectedVideo(JSONVideoData[asideVideos.indexOf(target)]);
		scrollToTop();
	};

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							user={user}
							selectedVideo={selectedVideo}
							asideVideos={asideVideos}
							selectNewVideo={selectNewVideo}
						/>
					}
				/>
				<Route
					path='uploadVideo'
					element={
						<VideoUploadPage
							user={user}
							selectedVideo={selectedVideo}
							asideVideos={asideVideos}
							selectNewVideo={selectNewVideo}
						/>
					}
				/>
				<Route
					path='videos/:videoId'
					element={<VideoDetailsPage />}
				/>
			</Routes>
		</Router>
	);
}
