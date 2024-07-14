import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//Assets/Styles
import "./UploadVideo.scss";
import publishIcon from "../../assets/images/icons/publish.svg";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadVideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
//Components/Utilities
import Button from "../Button/Button";
import scrollToTop from "../../utils/scrollToTop";

export default function UploadVideo() {
	const navigate = useNavigate();
	//input state:
	const [values, setValues] = useState({ title: "", description: "" });
	//error state:
	const [errors, setErrors] = useState({ title: false, description: false });

	//input handler:
	const handleInputChange = event => {
		const { name, value } = event.target;
		//spread values back into state, changing only the modified value:
		setValues({
			...values,
			[name]: value,
		});

		//clear error state when user starts typing:
		setErrors({
			...errors,
			[name]: false,
		});
	};

	//upload handler:
	const confirmUpload = event => {
		event.preventDefault();

		//check for input values:
		const newErrors = {
			//'newErrors' is true if value is empty:
			title: !values.title,
			description: !values.description,
		};

		setErrors(newErrors);

		// If no errors, continue:
		if (!newErrors.title && !newErrors.description) {
			//check posting time:
			const postedTime = new Date();
			const timestamp = postedTime.getTime();

			//axios POST to server:
			axios
				.post("http://localhost:8080/videos/upload", {
					title: values.title,
					channel: "Mohan Muruge",
					image: uploadVideoThumbnail,
					description: values.description,
					views: 0,
					likes: 0,
					duration: "12:34",
					video: uploadVideoThumbnail,
					timestamp: timestamp,
					comments: [],
				})
				.catch(error => console.log(error));

			console.log("Video upload successful");
			alert("Video upload successful");
			scrollToTop();
			navigate("/");
		}
	};

	return (
		<div className='upload-section__wrapper'>
			<section className='upload-section'>
				<h1 className='upload-section__heading'>Upload Video</h1>

				<div className='upload-section__form-wrapper'>
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
							<input
								className={`upload-section__title-input ${
									errors.title
										? "upload-section__title-input--error"
										: ""
								}`}
								type='text'
								name='title'
								id='video-title'
								placeholder='Add a title to your video'
								onChange={handleInputChange}
								value={values.title}
							/>
							{errors.title && (
								<span className='error-message'>
									This field is required
								</span>
							)}
						</label>

						<label
							className='upload-section__label'
							htmlFor='video-description'>
							ADD A VIDEO DESCRIPTION
							<textarea
								className={`upload-section__desc-input ${
									errors.description
										? "upload-section__desc-input--error"
										: ""
								}`}
								name='description'
								id='video-description'
								rows='5'
								placeholder='Add a description to your video'
								onChange={handleInputChange}
								value={values.description}></textarea>
							{errors.description && (
								<span className='error-message'>
									This field is required
								</span>
							)}
						</label>
					</form>
				</div>

				<div className='btn-wrapper'>
					<Button
						icon={publishIcon}
						label='PUBLISH'
						action={confirmUpload}
					/>

					<Link to='/'>
						<button className='cancel-btn'>CANCEL</button>
					</Link>
				</div>
			</section>
		</div>
	);
}
