//Assets/Styles
import "./VideoPlayerPage.scss";
//Components
import RenderVideoPage from "../../components/RenderVideoPage/RenderVideoPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";

export default function VideoPlayerPage({ user, baseUrl, videoList }) {
	//Set up for homepage video:
	const homeVideo = videoList[0]?.id;

	//Grab the video ID from the URL:
	const selectedVideo = useParams();

	//Currently selected video:
	const [currentVideo, setCurrentVideo] = useState({});

	//call for videoDetails using vid id
	useEffect(() => {
		const fetchVideoData = async () => {
			if (!selectedVideo.videoId) {
				try {
					const response = await axios.get(
						`${baseUrl}videos/${homeVideo}`
					);

					console.log(response);

					//get data from response:
					setCurrentVideo(response.data);
					scrollToTop();
				} catch (error) {
					console.log(
						`An error has occurred during the request for video data: `,
						error
					);
				}
			} else {
				try {
					const response = await axios.get(
						`${baseUrl}videos/${selectedVideo.videoId}`
					);
					//get data from response:
					setCurrentVideo(response.data);
					scrollToTop();
				} catch (error) {
					console.log(
						`An error has occurred during the request for video data: `,
						error
					);
				}
			}
		};
		fetchVideoData();
	}, [selectedVideo]);

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
