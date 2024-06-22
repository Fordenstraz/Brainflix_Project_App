//Assets/Styles
import './VideoPlayerPage.scss';
//Components
import RenderVideoPage from '../../components/RenderVideoPage/RenderVideoPage';

export default function VideoPlayerPage({
	baseUrl,
	apiKey,
	user,
	selectedVideo,
	videoListArray,
	selectNewVideo,
}) {
	return (
		<>
			<RenderVideoPage
				baseUrl={baseUrl}
				apiKey={apiKey}
				user={user}
				selectedVideo={selectedVideo}
				videoListArray={videoListArray}
				selectNewVideo={selectNewVideo}
			/>
		</>
	);
}
