//Assets/Styles
import "./VideoUploadPage.scss";
//Components
import UploadVideo from "../../components/UploadVideo/UploadVideo";

export default function Upload({ setVideoListArray, fetchVideoList }) {
	return (
		<>
			<UploadVideo
				setVideoListArray={setVideoListArray}
				fetchVideoList={fetchVideoList}
			/>
		</>
	);
}
