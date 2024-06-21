//Components
import Comments from '../../components/Comments/Comments';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideoList from '../../components/VideoList/VideoList';

export default function RenderVideoPage({
	user,
	selectedVideo,
	asideVideos,
	selectNewVideo,
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
						listData={asideVideos}
						currentVideo={selectedVideo}
						selectNewVideo={selectNewVideo}
					/>
				</aside>
			</main>
		</>
	);
}
