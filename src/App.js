import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//Assets/Styles
import "./App.scss";
import userData from "./assets/images/Mohan-muruge.jpg";
//Pages
import Brainflix from "./pages/Brainflix/Brainflix";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import VideoPlayerPage from "./pages/VideoPlayerPage/VideoPlayerPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export default function App() {
	//Set state for current user:
	const [user] = useState(userData);

	//Set API URL and key:
	const baseUrl = `http://localhost:8080/`;

	//Video list:
	const [videoListArray, setVideoListArray] = useState(
		[]
	);

	//Get list of videos from API:
	const fetchVideoList = async () => {
		try {
			const response = await axios.get(
				`${baseUrl}videos`
			);
			//set response data as state:
			setVideoListArray(response.data);
		} catch (error) {
			console.log(
				`An error has occurred during the request for the video list: `,
				error
			);
		}
	};

	//trigger the API call:
	useEffect(() => {
		fetchVideoList();
	}, []);

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Brainflix user={user} />}>
					<Route
						path='/'
						element={
							<VideoPlayerPage
								user={user}
								baseUrl={baseUrl}
								videoList={videoListArray}
							/>
						}
					/>

					<Route
						path='videos/:videoId'
						element={
							<VideoPlayerPage
								user={user}
								baseUrl={baseUrl}
								videoList={videoListArray}
							/>
						}
					/>

					<Route
						path='videos/upload'
						element={
							<VideoUploadPage
								user={user}
								setVideoListArray={
									setVideoListArray
								}
								fetchVideoList={
									fetchVideoList
								}
							/>
						}
					/>

					<Route
						path='*'
						element={<PageNotFound />}
					/>
				</Route>
			</Routes>
		</Router>
	);
}
