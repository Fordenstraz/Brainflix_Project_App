//Assets/Styles
import './Comments.scss';
import commentIcon from '../../assets/images/icons/add_comment.svg';
//Components
import UserAvatar from '../UserAvatar/UserAvatar';
import Button from '../Button/Button';
import formatTimestamp from '../../utils/formatTimestamp';

export default function Comments({ user, video }) {
	const generateComments = comment => {
		return (
			<div
				className='generated-comment'
				key={comment.id}>
				<UserAvatar />

				<div className='generated-comment__container'>
					<div className='generated-comment__authorship'>
						<span className='generated-comment__name'>
							{comment.name}
						</span>{' '}
						<span className='generated-comment__date'>
							{formatTimestamp(comment.timestamp)}
						</span>
					</div>
					<p className='generated-comment__body'>{comment.comment}</p>
				</div>
			</div>
		);
	};

	return (
		<div className='comments'>
			<div className='comments__form-wrapper'>
				<UserAvatar
					avatarImg={user}
					tag='form'
				/>

				<form
					className='comments__form'
					action=''>
					<div className='comments__input-wrapper'>
						<label htmlFor='comment-input'>
							JOIN THE CONVERSATION
						</label>

						<textarea
							className='comments__input'
							id='comment-input'
							rows='5'
							placeholder='Add a new comment'
						/>
					</div>

					<Button
						icon={commentIcon}
						label='COMMENT'
					/>
				</form>
			</div>

			<div className='comments__container'>
				{video?.comments?.map(generateComments)}
			</div>
		</div>
	);
}
