import './UserAvatar.scss';

export default function UserAvatar({ avatarImg, tag }) {
	return (
		<div className={`avatar__${tag}`}>
			<img
				className='avatar'
				src={avatarImg}
				alt='user profile image'
			/>
		</div>
	);
}
