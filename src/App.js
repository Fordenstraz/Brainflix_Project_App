//Assets/Styles
import './App.scss';
import { useState } from 'react';
import avatar from './assets/images/Mohan-muruge.jpg';
import JSONVideoList from './data/videos.json';
import JSONVideoData from './data/video-details.json';
//Components
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoList from './components/VideoList/VideoList';
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
		<>
			<Header user={user} />

			<VideoPlayer video={selectedVideo} />

			<main className='main'>
				<div className='main__video-section'>
					<VideoInfo video={selectedVideo} />

					<Comments
						user={user}
						video={selectedVideo}
					/>
				</div>

				<aside className='main__other-videos'>
					<VideoList
						listData={asideVideos}
						currentVideo={selectedVideo}
						selectNewVideo={selectNewVideo}
					/>
				</aside>
			</main>
		</>
	);
}
