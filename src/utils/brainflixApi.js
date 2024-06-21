//Generated API key:
export const apiKey = '37734e3a-5cf0-4773-ad6c-f0f00dac5c42';

export default class BandSiteApi {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/`;
	}

	async getVideoList() {
		try {
			const response = await axios.get(
				`${this.baseUrl}videos?api_key=${this.apiKey}`
			);
			//get data from response:
			return response.data;
		} catch (error) {
			console.log(`An error has occurred: `, error);
		}
	}

	async getVideoDetails(videoId) {
		try {
			const response = await axios.get(
				`${this.baseUrl}videos/;${videoId}?api_key=${this.apiKey}`
			);
			//get data from response:
			return response.data;
		} catch (error) {
			console.log(`An error has occurred: `, error);
		}
	}

	//For comments deep dive:
	// async postComment(videoId, comment) {
	// 	try {
	// 		//set header:
	// 		const config = { headers: { 'Content-type': 'application/json' } };

	// 		await axios.post(
	// 			`${this.baseUrl}videos/;${videoId}/comments?api_key=${this.apiKey}`,
	// 			comment,
	// 			config
	// 		);
	// 	} catch (error) {
	// 		console.log(`An error has occurred: `, error);
	// 	}
	// }

	// async deleteComment(videoId, commentId) {
	// 	try {
	// 		await axios.delete(
	// 			`${this.baseUrl}videos/:${videoId}/comments/:${commentId}?api_key=${this.apiKey}`
	// 		);
	// 	} catch (error) {
	// 		console.log(`An error has occurred: `, error);
	// 	}
	// }
}
