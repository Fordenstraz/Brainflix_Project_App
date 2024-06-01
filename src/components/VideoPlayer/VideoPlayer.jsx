//Assets/Styles
import './VideoPlayer.scss';

export default function VideoPlayer(props) {
	return (
		<div className='video'>
			<figure className='video__current-selection'>
				<video
					className='video__player'
					controls
					poster={props.video.image}>
					<source src={props.video.video} />
				</video>
			</figure>
		</div>
	);
}
