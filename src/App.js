//Assets/Styles
import './App.scss';
import avatar from './assets/images/Mohan-muruge.jpg';
import commentIcon from './assets/images/icons/add_comment.svg';
//Components
import Header from './components/Header/Header';

export default function App() {
	return (
		<>
			<Header userImage={avatar} />
		</>
	);
}
