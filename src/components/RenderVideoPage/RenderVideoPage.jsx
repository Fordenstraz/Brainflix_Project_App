//Assets/Styles
import "./RenderVideoPage.scss";
//Components
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

export default function RenderVideoPage({
	user,
	videoList,
	selectedVideo = {},
}) {
	return (
		<>
			<VideoPlayer video={selectedVideo} />

			<main className='main'>
				<div className='main__video-section'>
					<VideoInfo video={selectedVideo} />

					<Comments
						user={user}
						video={selectedVideo}
					/>
				</div>

				<aside className='main__other-videos'>
					<VideoList
						videoList={videoList}
						currentVideo={selectedVideo}
					/>
				</aside>
			</main>
		</>
	);
}
