//Assets/Styles
import './VideoInfo.scss';
import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';
//Utilities
import formatTimestamp from '../utils/formatTimestamp';

export default function VideoInfo({ video }) {
	return (
		<section className='video__info'>
			<h1 className='video__title'>{video.title}</h1>

			<div className='video__details'>
				<div className='video__authorship'>
					<div className='video__channel'>By {video.channel}</div>

					<span>{formatTimestamp(video.timestamp)}</span>
				</div>

				<div className='video__metrics'>
					<div>
						<img
							src={viewsIcon}
							alt='an eye'
						/>

						{video.views}
					</div>

					<div>
						<img
							src={likesIcon}
							alt='a heart'
						/>

						{video.likes}
					</div>
				</div>
			</div>

			<div className='video__description'>{video.description}</div>

			<div className='video__comments'>
				{video.comments.length} Comments
			</div>
		</section>
	);
}
