//Assets/Styles
import './Header.scss';
import uploadIcon from '../../assets/images/icons/upload.svg';
//Components
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import UserAvatar from '../UserAvatar/UserAvatar';
import Button from '../Button/Button';

export default function Header({ user }) {
	return (
		<header className='header'>
			<Logo />

			<nav className='nav'>
				<div className='nav__top-row'>
					<input
						className='nav__searchbar'
						type='text'
						placeholder='Search'
					/>

					<UserAvatar
						avatarImg={user}
						tag='mobile'
					/>
				</div>

				<Link to='upload'>
					<Button
						icon={uploadIcon}
						label='UPLOAD'
					/>
				</Link>

				<UserAvatar
					avatarImg={user}
					tag='desktop'
				/>
			</nav>
		</header>
	);
}
