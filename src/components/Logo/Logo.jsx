//Assets/Styles
import './Logo.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
//Components
import { Link } from 'react-router-dom';

export default function Logo() {
	return (
		<Link to='/'>
			<img
				className='brainflix-logo-image'
				src={logo}
				alt='the Brainflix logo'
			/>
		</Link>
	);
}
