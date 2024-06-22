import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
//Assets/Styles
import './App.scss';
import userData from './assets/images/Mohan-muruge.jpg';
//Pages
import Brainflix from './pages/Brainflix/Brainflix';
import Home from './pages/Home/Home';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

export default function App() {
	//Set state for current user:
	const [user, setUser] = useState(userData);

	//Set API URL and key:
	const baseUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/`;
	const apiKey = '37734e3a-5cf0-4773-ad6c-f0f00dac5c42';

	//Video list:
	const [videoListArray, setVideoListArray] = useState([]);

	//Get list of videos from API:
	useEffect(() => {
		const fetchVideoList = async () => {
			try {
				const response = await axios.get(
					`${baseUrl}videos?api_key=${apiKey}`
				);
				//set response data as state:
				setVideoListArray(response.data);
				console.log('Video list call successful!');
				console.log(response.data);
			} catch (error) {
				console.log(
					`An error has occurred during the request for the video list: `,
					error
				);
			}
		};
		//trigger the API call:
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
							<Home
								user={user}
								videoList={videoListArray}
							/>
						}
					/>

					<Route
						path='uploadVideo'
						element={<VideoUploadPage user={user} />}
					/>

					<Route
						path='videos/:videoId'
						element={
							<VideoPlayerPage
								user={user}
								baseUrl={baseUrl}
								apiKey={apiKey}
								videoList={videoListArray}
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
