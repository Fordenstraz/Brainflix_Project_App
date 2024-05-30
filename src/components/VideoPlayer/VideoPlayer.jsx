import './VideoPlayer.scss';
import viewsIcon from '../../assets/images/icons/views.svg';
import likesIcon from '../../assets/images/icons/likes.svg';

export default function VideoPlayer(props) {
	//Format timestamps from epoch, to 'MM/DD/YYYY':
	const formatTimestamp = timestamp => {
		const date = new Date(timestamp);
		const month = String(date.getMonth() + 1);
		const day = String(date.getDate() + 1);
		const year = date.getFullYear();
		return `${month}/${day}/${year}`;
	};

	return (
		<main className='video'>
			<figure className='video__current-selection'>
				<video
					className='video__player'
					controls
					poster={props.video.image}>
					<source src={props.video.video} />
				</video>
			</figure>

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

				<div className='video__description'>
					{props.video.description}
				</div>

				<div className='video__comments'>
					{props.video.comments.length} Comments
				</div>
			</section>
		</main>
	);
}
