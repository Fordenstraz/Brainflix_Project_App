//Assets/Styles
import './VideoDetailsPage.scss';
//Components
import RenderVideoPage from '../../components/RenderVideoPage/RenderVideoPage';

export default function VideoDetailsPage({
	user,
	selectedVideo,
	asideVideos,
	selectNewVideo,
}) {
	return (
		<>
			<RenderVideoPage
				user={user}
				selectedVideo={selectedVideo}
				asideVideos={asideVideos}
				selectNewVideo={selectNewVideo}
			/>
		</>
	);
}
