import { Outlet } from 'react-router-dom';
//Assets/Styles
import './Brainflix.scss';
//Components
import Header from '../../components/Header/Header';

export default function Brainflix({ user }) {
	return (
		<>
			<Header user={user} />

			<Outlet />
		</>
	);
}
