import './UserAvatar.scss';

export default function UserAvatar({ avatarImg, tag = 'standard' }) {
	return (
		<div className={`avatar__${tag}`}>
			{avatarImg && (
				<img
					className='avatar'
					src={avatarImg}
					alt='user profile image'
				/>
			)}
		</div>
	);
}
