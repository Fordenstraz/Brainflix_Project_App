//Assets/Styles
import './UploadVideo.scss';
import publishIcon from '../../assets/images/icons/publish.svg';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
//Components
import Button from '../Button/Button';

export default function UploadVideo() {
	return (
		<div className='upload-section__wrapper'>
			<section className='upload-section'>
				<h1 className='upload-section__heading'>Upload Video</h1>

				<figure className='upload-section__thumbnail'>
					<figcaption className='upload-section__thumbnail-heading'>
						VIDEO THUMBNAIL
					</figcaption>
					<img
						className='upload-section__thumbnail-img'
						src={thumbnail}
						alt='video thumbnail'
					/>
				</figure>

				<form className='upload-section__form'>
					<label
						className='upload-section__label'
						htmlFor='video-title'>
						TITLE YOUR VIDEO
					</label>
					<input
						className='upload-section__title-input'
						type='text'
						name='video-title'
						id='video-title'
						placeholder='Add a title to your video'
					/>

					<label
						className='upload-section__label'
						htmlFor='video-description'>
						ADD A VIDEO DESCRIPTION
					</label>
					<textarea
						className='upload-section__desc-input'
						name='video-description'
						id='video-description'
						placeholder='Add a description to your video'></textarea>

					<Button
						icon={publishIcon}
						label='PUBLISH'
					/>
				</form>
			</section>
		</div>
	);
}
