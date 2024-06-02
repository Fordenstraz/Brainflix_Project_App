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
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoList from './components/VideoList/VideoList';

export default function App() {
	//Set state with default video:
	const [selectedVideo, setSelectedVideo] = useState(0);
	//Set state for current user:
	const [user, setUser] = useState(avatar);
	//Set state of video list:
	const [asideVideos, setAsideVideos] = useState(JSONVideos);

	return (
		<>
			<Header user={user} />

			<VideoPlayer video={videoData[selectedVideo]} />

			<main className='main'>
				<div className='main__video-section'>
					<VideoInfo video={videoData[selectedVideo]} />

					<Comments
						user={user}
						video={videoData[selectedVideo]}
					/>
				</div>

				<aside className='main__other-videos'>
					<VideoList
						listData={asideVideos}
						currentVideo={videoData[selectedVideo]}
						setSelectedVideo={setSelectedVideo}
					/>
				</aside>
			</main>
		</>
	);
}
