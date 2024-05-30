//Assets/Styles
import './Header.scss';
import uploadIcon from '../../assets/images/icons/upload.svg';
//Components
import Logo from '../Logo/Logo';
import UserAvatar from '../UserAvatar/UserAvatar';
import Button from '../Button/Button';

export default function Header({ user }) {
	return (
		<header className='header'>
			<Logo />

			<nav className='nav'>
				<input
					className='nav__searchbar'
					type='text'
					placeholder='Search'
				/>

				<UserAvatar
					avatarImg={user}
					tag='mobile'
				/>

				<Button
					icon={uploadIcon}
					label='UPLOAD'
				/>

				<UserAvatar
					avatarImg={user}
					tag='standard'
				/>
			</nav>
		</header>
	);
}
