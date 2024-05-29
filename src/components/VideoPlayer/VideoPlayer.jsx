import './VideoPlayer.scss';

export default function VideoPlayer({ video, image }) {
	return (
		<main className='current-video'>
			<video
				className='current-video__player'
				controls
				poster={image}>
				<source src={video} />
			</video>
		</main>
	);
}
