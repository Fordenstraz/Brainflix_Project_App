//Assets/Styles
import "./VideoList.scss";
//Components/Utilities
import { Link, useParams } from "react-router-dom";

export default function VideoList({ videoList }) {
	const currentVideo = useParams();

	//Create list that exclude current video:
	const nextVideosList = videoList.filter(video => {
		if (!currentVideo.videoId) {
			return video.id !== videoList[0].id;
		} else {
			return video.id !== currentVideo.videoId;
		}
	});

	//Template to create each video preview:
	const generateVideoPreview = video => {
		return (
			<Link
				to={`/videos/${video.id}`}
				key={video.id}>
				<article className='video-preview'>
					<img
						className='video-preview__image'
						src={video.image}
						alt={video.altText}
					/>

					<div className='video-preview__authorship'>
						<h3 className='video-preview__title'>{video.title}</h3>
						<p className='video-preview__channel'>
							{video.channel}
						</p>
					</div>
				</article>
			</Link>
		);
	};

	return (
		<section className='video-list'>
			<h2 className='video-list__header'>NEXT VIDEOS</h2>
			<div className='video-list__container'>
				{nextVideosList.map(generateVideoPreview)}
			</div>
		</section>
	);
}
