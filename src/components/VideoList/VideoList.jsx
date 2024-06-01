import './VideoList.scss';

export default function VideoList({ listData }) {
	const generateVideoPreview = video => {
		return (
			<article
				className='video-preview'
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

	// console.log(props);

	return (
		<section className='video-list'>
			<h2 className='video-list__header'>NEXT VIDEOS</h2>
			<div className='video-list__container'>
				{listData.map(generateVideoPreview)}
			</div>
		</section>
	);
}
