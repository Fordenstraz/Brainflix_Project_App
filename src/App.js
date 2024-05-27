//Assets/Styles
import './App.scss';
import uploadIcon from './assets/images/icons/upload.svg';
import commentIcon from './assets/images/icons/add_comment.svg';

//Components
import Button from './components/Button/Button';

export default function App() {
	return (
		<>
			<Button
				icon={commentIcon}
				label='COMMENT'
			/>
			<Button
				icon={uploadIcon}
				label='UPLOAD'
			/>
		</>
	);
}
