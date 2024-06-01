//Assets/Styles
import './VideoInfo.scss';
import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';
//Components
import formatTimestamp from '../formatTimestamp';

export default function VideoInfo(props) {
	return (
		<section className='video__info'>
			<h1 className='video__title'>{props.video.title}</h1>

			<div className='video__details'>
				<div className='video__authorship'>
					<div className='video__channel'>
						By {props.video.channel}
					</div>

					<span>{formatTimestamp(props.video.timestamp)}</span>
				</div>

				<div className='video__metrics'>
					<div>
						<img
							src={viewsIcon}
							alt='an eye'
						/>

						{props.video.views}
					</div>

					<div>
						<img
							src={likesIcon}
							alt='a heart'
						/>

						{props.video.likes}
					</div>
				</div>
			</div>

			<div className='video__description'>{props.video.description}</div>

			<div className='video__comments'>
				{props.video.comments.length} Comments
			</div>
		</section>
	);
}
