import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//Assets/Styles
import './App.scss';
import avatar from './assets/images/Mohan-muruge.jpg';
import JSONVideoList from './data/videos.json';
import JSONVideoData from './data/video-details.json';
//Components
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoList from './components/VideoList/VideoList';
//Pages
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import SelectedVideo from './pages/SelectedVideo/SelectedVideo';
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
					path='/upload'
					element={
						<Upload
							user={user}
							selectedVideo={selectedVideo}
							asideVideos={asideVideos}
							selectNewVideo={selectNewVideo}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}
