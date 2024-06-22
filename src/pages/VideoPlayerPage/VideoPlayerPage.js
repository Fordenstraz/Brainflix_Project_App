//Assets/Styles
import './VideoPlayerPage.scss';
//Components
import RenderVideoPage from '../../components/RenderVideoPage/RenderVideoPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function VideoPlayerPage({ user, baseUrl, apiKey, videoList }) {
	//Grab the video ID from the URL:
	const videoId = useParams();

	//Currently selected video:
	const [currentVideo, setCurrentVideo] = useState({});

	//call for videoDetails using vid id
	useEffect(() => {
		const fetchVideoData = async () => {
			try {
				const response = await axios.get(
					`${baseUrl}videos/${videoId.videoId}?api_key=${apiKey}`
				);
				//get data from response:
				setCurrentVideo(response.data);
			} catch (error) {
				console.log(
					`An error has occurred during the request for video data: `,
					error
				);
			}
		};
		fetchVideoData();
	}, [videoId]);

	return (
		<>
			<RenderVideoPage
				user={user}
				videoList={videoList}
				selectedVideo={currentVideo}
			/>
		</>
	);
}
