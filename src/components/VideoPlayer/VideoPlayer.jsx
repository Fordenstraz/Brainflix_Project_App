//Assets/Styles
import './VideoPlayer.scss';

export default function VideoPlayer({ video }) {
	return (
		<div className='video'>
			<figure className='video__current-selection'>
				<video
					className='video__player'
					controls
					poster={video.image}>
					<source src={video.video} />
				</video>
			</figure>
		</div>
	);
}
