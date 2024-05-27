import './UserAvatar.scss';

export default function UserAvatar({ avatarImg }) {
	return (
		<div className='avatar__container'>
			<img
				className='avatar'
				src={avatarImg}
				alt='user profile image'
			/>
		</div>
	);
}
