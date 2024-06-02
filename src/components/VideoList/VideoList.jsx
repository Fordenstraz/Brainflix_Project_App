//Assets/Styles
import './VideoList.scss';

export default function VideoList({
	listData,
	currentVideo,
	setSelectedVideo,
}) {
	//Create list that exclude current video:
	const nextVideosList = listData.filter(video => {
		return video.id !== currentVideo.id;
	});

	//Set the selected video state:
	const selectNewVideo = target => {
		setSelectedVideo(listData.indexOf(target));
	};

	//Template to create each video preview:
	const generateVideoPreview = video => {
		return (
			<article
				className='video-preview'
				onClick={() => selectNewVideo(video)}
				key={video.id}>
				<img
					className='video-preview__image'
					src={video.image}
					alt='n/a'
				/>

				<div className='video-preview__authorship'>
					<h3 className='video-preview__title'>{video.title}</h3>
					<p className='video-preview__channel'>{video.channel}</p>
				</div>
			</article>
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
