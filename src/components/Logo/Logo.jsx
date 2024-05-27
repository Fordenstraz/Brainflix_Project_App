import './Logo.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';

export default function Logo() {
	return (
		<img
			className='brainflix-logo-image'
			src={logo}
			alt='the Brainflix logo'
		/>
	);
}
