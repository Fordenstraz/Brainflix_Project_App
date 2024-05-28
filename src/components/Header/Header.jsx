//Assets/Styles
import './Header.scss';
import uploadIcon from '../../assets/images/icons/upload.svg';
//Components
import Logo from '../Logo/Logo';
import UserAvatar from '../UserAvatar/UserAvatar';
import Button from '../Button/Button';

export default function Header({ userImage }) {
	return (
		<header className='header'>
			<Logo />

			<div className='header__right'>
				<nav className='nav'>
					<input
						className='nav__searchbar'
						type='text'
						placeholder='Search'
					/>
					<UserAvatar avatarImg={userImage} />
				</nav>

				<Button
					icon={uploadIcon}
					label='UPLOAD'
				/>
			</div>
		</header>
	);
}
